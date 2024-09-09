import React from 'react'
import { View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/loginScreen/Login';
import { RegisterParamList } from './types';
import OtpScreen from '../screens/otpScreen/OtpScreen';
const Stack = createNativeStackNavigator<RegisterParamList>();

const RegisterNavigators = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="otp" component={OtpScreen} />
    </Stack.Navigator>
  )
}

export default RegisterNavigators