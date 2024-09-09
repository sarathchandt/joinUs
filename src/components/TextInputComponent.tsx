import React from 'react';
import {TextInput,  View} from 'react-native';
import tw from '../lib/tailwind';

type TextInputComponentProps = {
  onChange: (text: string) => void;
  placeholder: string;
  isNumber?: boolean;
  numberLimit?: number;
};

const TextInputComponent = ({
  onChange,
  placeholder,
  isNumber,
  numberLimit
}: TextInputComponentProps) => {
  return (
    <View style={tw` relative`}>
      <View
        style={tw`absolute top-[3px] left-[1.5px] h-full w-full bg-blueVarients-110 rounded-[10px]`}></View>
      <View
        style={tw`border-blueVarients-110 border-[1px] bg-white rounded-[10px]`}>
        <TextInput
        keyboardType={isNumber ? 'numeric' : 'default'}
        maxLength={numberLimit}
          placeholderTextColor={'#7883B0'}
          style={tw`text-black px-4`}
          onChangeText={onChange}
          placeholder={placeholder}></TextInput>
      </View>
    </View>
  );
};

export default TextInputComponent;
