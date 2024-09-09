import React from 'react'
import { ActivityIndicator, Pressable, Text } from 'react-native'
import tw from '../lib/tailwind'

type ButtonProps = {
    onpress: () => void
    title: string;
    isLoading?: boolean;
}

const Button = ({onpress,title,isLoading}:ButtonProps) => {
  return (
    <Pressable style={tw`bg-blueVarients-110 rounded-[10px] p-4`} onPress={()=>{!isLoading && onpress()}} >
      {!isLoading ?  <Text style={tw`text-white text-center font-bold`} >{title}</Text>
       : <ActivityIndicator size="small" color="#ffffff" />}
    </Pressable>
  )
}

export default Button