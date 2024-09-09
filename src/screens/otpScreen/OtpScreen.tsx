import React from 'react'
import { View } from 'react-native'
import tw from '../../lib/tailwind'
import { RegisterScreenProps } from '../../navigators/types'
import Toast from 'react-native-toast-message'
import TextInputComponent from '../../components/TextInputComponent'
import Button from '../../components/Button'
import { useMutation } from '@tanstack/react-query'
import { verifyOtp } from '../../lib/api'
import { isValidOTP } from '../../lib/utils'
import { onSuccessOtpProps } from '../../lib/types'

import * as Keychain from 'react-native-keychain';
import { useStore } from '../../store/store'


const OtpScreen:React.FC<RegisterScreenProps<"otp">> = ({navigation,route}) => {

    const setUserLoggedIn = useStore(state=>state.setIsUserLoggedIn);
   
    const [otp, setOtp] = React.useState('');
    const showToast = (message: string) => {
        Toast.show({
          type: 'error',
          position: 'top',
          text1: 'OOPS...!',
          text2: message,
        });
      };


    const successFunction = async (data:onSuccessOtpProps) => {
        const tokens = {
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
        };
        await Keychain.setGenericPassword("tokens", JSON.stringify(tokens));
        setUserLoggedIn(true);
    }

    const mutation = useMutation({
        mutationFn: verifyOtp,
        onSuccess: data => {
            successFunction(data);
        
        },
        onError: err => {
          showToast('Something Went Wrong! Please try again');
        },
      });

      const sent = () => {
        if (isValidOTP(otp)) {
          mutation.mutate({
            email:route.params.email,
            otp:Number(otp)
          });
        } else {
          showToast('Please enter a valid OTP. Make sure there is no space');
        }
      };



  return (
    <View style={tw`flex-1 bg-white py-4`}>
    <Toast />
    <View style={tw`my-auto`}>
      <View style={tw`w-6/12 h-30 bg-blueVarients-100 mx-auto`}></View>
      <View style={tw`px-4 mt-10 gap-4`}>
        <TextInputComponent isNumber numberLimit={4} placeholder="Enter OTP" onChange={setOtp} />
      </View>
    </View>
    <View style={tw`w-4/12 ml-auto px-4`}>
      <Button isLoading={mutation.isPending} onpress={sent} title="Enter" />
    </View>
  
  </View>
  )
}

export default OtpScreen