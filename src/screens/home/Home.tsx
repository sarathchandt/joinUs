import React, {useEffect, useRef, useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import tw from '../../lib/tailwind';
import HomeHeader from './HomeHeader';
import HistoryList from './HistoryList';
import Button from '../../components/Button';
import {RootScreenProps} from '../../navigators/types';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import BottomSheetComponent from '../../components/BottomSheetComponent';
import io from 'socket.io-client';
import {useStore} from '../../store/store';

const Home: React.FC<RootScreenProps<'home'>> = ({navigation}) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [roomId, setRoomId] = useState<string>('');
  const setSocket = useStore(state => state.setSocket);

  const socket = io('http://192.168.71.186:3000');

  const createRoom = () => {
    socket.emit('createRoom', roomId);

    socket.on('roomCode', data => {
      setRoomId(data);
    });

    socket.on('roomAlreadyExist', data => {
      setRoomId(data);
    });
    bottomSheetModalRef.current?.present();
  };

  useEffect(() => {});

  return (
    <View style={tw`flex-1 relative`}>
      <HomeHeader />
      <HistoryList />
      <View style={tw`absolute bottom-6 right-4`}>
        <Button onpress={createRoom} title="New Meet" />
      </View>
      <BottomSheetComponent bottomSheetRef={bottomSheetModalRef}>
        {roomId.length > 0 && socket ? (
          <View style={tw`bg-white h-full p-4 rounded-[10px] mx-1 `}>
            <View style={tw`my-auto gap-4`}>
              <Text style={tw`text-blueVarients-110 text-xl text-center`}>
                ROOM ID:{roomId}
              </Text>
              <View style={tw`flex-row justify-center gap-4`}>
                <Button onpress={() => {}} title="Share" />
                <Button
                  onpress={() => {
                    if (roomId.length > 0) {
                      setSocket(socket);
                      navigation.push('initialScreenMeet', {
                        meetId: roomId,
                      });
                    }
                  }}
                  title="Join Now"
                />
                <Button
                  onpress={() => {
                    bottomSheetModalRef.current?.dismiss();
                  }}
                  title="Dismiss"
                />
              </View>
            </View>
          </View>
        ) : (
          <View style={tw`bg-white h-full p-4 rounded-[10px] mx-1`}>
            <ActivityIndicator style={tw`m-auto`} />
          </View>
        )}
      </BottomSheetComponent>
    </View>
  );
};

export default Home;
