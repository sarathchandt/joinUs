import React from 'react'
import { Pressable, Text } from 'react-native'
import tw from '../lib/tailwind'

type ButtonProps = {
    onpress: () => void
    title: string
}

const Button = ({onpress,title}:ButtonProps) => {
  return (
    <Pressable style={tw`bg-blueVarients-110 rounded-[10px] p-4`} onPress={onpress} >
        <Text style={tw`text-white text-center font-bold`} >{title}</Text>
    </Pressable>
  )
}

export default Button