import React from 'react'
import { View } from 'react-native'
import tw from '../lib/tailwind'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import Home from '../screens/home/Home';
import NewMeetingInitialScreen from '../screens/JoinMeetScreens/NewMeetingInitialScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  return (
    <View style={tw`flex-1 `} >
       <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="initialScreenMeet" component={NewMeetingInitialScreen} />
       </Stack.Navigator>
    </View>
  )
}

export default RootNavigation