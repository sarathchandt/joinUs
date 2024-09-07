import React from 'react';
import {View} from 'react-native';
import tw from '../../lib/tailwind';
import TextInputComponent from '../../components/TextInputComponent';
import Button from '../../components/Button';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {sentOtp} from '../../lib/api';
import {isValidEmail} from '../../lib/utils';


const Login = () => {

  const [email, setEmail] = React.useState('');

  
  const mutation = useMutation({
    mutationFn: sentOtp,
    onSuccess: data => {
      console.log('data', data);
    },
    onError: err => {
      console.log('err', err);
    },
  });

  const sent = () => {
    if (isValidEmail(email)) {
      mutation.mutate({
        email,
      });
    } else {
      console.log('Invalid Email');
    }
  };

  return (
    <View style={tw`flex-1 bg-white py-4`}>
      <View style={tw`my-auto`}>
        <View style={tw`w-6/12 h-30 bg-blueVarients-100 mx-auto`}></View>
        <View style={tw`px-4 mt-10 gap-4`}>
          <TextInputComponent placeholder="Email" onChange={setEmail} />
        </View>
      </View>
      <View style={tw`w-4/12 ml-auto px-4`}>
        <Button onpress={sent} title="Next" />
      </View>
    </View>
  );
};

export default Login;
