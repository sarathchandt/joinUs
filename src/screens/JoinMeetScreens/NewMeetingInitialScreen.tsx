import React from 'react';
import {View} from 'react-native';
import {RootScreenProps} from '../../navigators/types';
import tw from '../../lib/tailwind';

const NewMeetingInitialScreen: React.FC<
  RootScreenProps<'initialScreenMeet'>
> = ({navigation,route}) => {

  const {meetId} = route.params;
  console.log(meetId);
  
  return <View style={tw`flex-1`} ></View>;
};

export default NewMeetingInitialScreen;
