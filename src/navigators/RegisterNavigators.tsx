import React from 'react'
import { View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/loginScreen/Login';
const Stack = createNativeStackNavigator();

const RegisterNavigators = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name="login" component={Login} />
    </Stack.Navigator>
  )
}

export default RegisterNavigators