import React from 'react';
import {View} from 'react-native';
import tw from '../../lib/tailwind';
import TextInputComponent from '../../components/TextInputComponent';
import Button from '../../components/Button';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {sentOtp} from '../../lib/api';
import {isValidEmail} from '../../lib/utils';
import Toast from 'react-native-toast-message';
import {RegisterScreenProps} from '../../navigators/types';

const Login: React.FC<RegisterScreenProps<'login'>> = ({navigation}) => {
  const [email, setEmail] = React.useState('');

  const showToast = (message: string) => {
    Toast.show({
      type: 'error',
      position: 'top',
      text1: 'OOPS...!',
      text2: message,
    });
  };

  const mutation = useMutation({
    mutationFn: sentOtp,
    onSuccess: data => {
      navigation.navigate('otp', {
        email,
      });
    },
    onError: err => {
      showToast('Something Went Wrong! Please try again');
    },
  });

  const sent = () => {
    if (isValidEmail(email)) {
      mutation.mutate({
        email,
      });
    } else {
      showToast('Please enter a valid email. Make sure there is no space');
    }
  };

  return (
    <View style={tw`flex-1 bg-white py-4`}>
      <Toast />
      <View style={tw`my-auto`}>
        <View style={tw`w-6/12 h-30 bg-blueVarients-100 mx-auto`}></View>
        <View style={tw`px-4 mt-10 gap-4`}>
          <TextInputComponent placeholder="Email" onChange={setEmail} />
        </View>
      </View>
      <View style={tw`w-4/12 ml-auto px-4`}>
        <Button isLoading={mutation.isPending} onpress={sent} title="Next" />
      </View>
    </View>
  );
};

export default Login;
