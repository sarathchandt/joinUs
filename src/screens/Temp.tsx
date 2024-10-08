import React, { useEffect, useState } from 'react'
import { View } from 'react-native';
import { RTCView, mediaDevices } from 'react-native-webrtc';
import tw from '../lib/tailwind';

const Temp = () => {

    const [localStream, setLocalStream] = useState<any>(null);
    useEffect(() => {
        const getUserMedia = async () => {
            try {
                const stream = await mediaDevices.getUserMedia({
                    audio: false,
                    video: {
                        facingMode: 'user',

                    },
                    
                });
                setLocalStream(stream);
            } catch (error) {
                console.error('Error accessing camera:', error);
            }
        };
    
        getUserMedia();
    }, []);
  return (
    <View style={[tw`h-[440px]`,{ flex: 1 }]}>
    {localStream && (
        <RTCView
        mirror
            streamURL={localStream.toURL()}
            style={{ flex: 1 }}
            objectFit="cover"
        />
    )}
</View>
  )
}

export default Temp