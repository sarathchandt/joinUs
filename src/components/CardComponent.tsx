import React from 'react';
import {View} from 'react-native';
import tw from '../lib/tailwind';

type CardComponentProps = {
  children: React.ReactNode;
};

const CardComponent = ({children}: CardComponentProps) => {
  return (
    <View
      style={tw`border-blueVarients-110 border-[1px] mb-4 bg-blueVarients-110 rounded-[10px]  pt-1.5 px-[1px] pb-[1px]`}>
      <View style={tw`  bg-white p-4 rounded-[10px] `}>{children}</View>
    </View>
  );
};

export default CardComponent;
