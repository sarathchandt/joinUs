import React from 'react';
import {View} from 'react-native';
import {RootScreenProps} from '../../navigators/types';
import tw from '../../lib/tailwind';
import { useStore } from '../../store/store';

const NewMeetingInitialScreen: React.FC<
  RootScreenProps<'initialScreenMeet'>
> = ({navigation,route}) => {
  const socket = useStore(state => state.socket);

  const {meetId} = route.params;

  
  
  return <View style={tw`flex-1`} ></View>;
};

export default NewMeetingInitialScreen;
