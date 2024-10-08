import React from 'react'
import { View } from 'react-native'
import tw from '../../lib/tailwind'
import TextInputComponent from '../../components/TextInputComponent'
import Button from '../../components/Button'

const HomeHeader = () => {
  return (
    <View style={tw `flex-row px-4 py-4`} >
        <View style={tw`flex-1`} >
            <TextInputComponent onChange={(e)=>{}} placeholder='Enter the join code' />
        </View>
        <View style={tw`w-3/12 ml-4 h-full pt-0.5 `} >
            <Button onpress={()=>{}} title='Join' />
        </View>
    </View>
  )
}

export default HomeHeader