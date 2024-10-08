import React, {useRef} from 'react';
import {Text, View} from 'react-native';
import tw from '../../lib/tailwind';
import HomeHeader from './HomeHeader';
import HistoryList from './HistoryList';
import Button from '../../components/Button';
import {RootScreenProps} from '../../navigators/types';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import BottomSheetComponent from '../../components/BottomSheetComponent';

const Home: React.FC<RootScreenProps<'home'>> = ({navigation}) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  return (
    <View style={tw`flex-1 relative`}>
      <HomeHeader />
      <HistoryList />
      <View style={tw`absolute bottom-6 right-4`}>
        <Button
          onpress={() => {
            bottomSheetModalRef.current?.present();
          }}
          title="New Meet"
        />
      </View>
      <BottomSheetComponent bottomSheetRef={bottomSheetModalRef}>
        <View style={tw`bg-white h-full p-4 rounded-[10px] mx-1 `}>
            <View style={tw`my-auto gap-4`} >
              <Text style={tw`text-blueVarients-110 text-xl text-center`} >XTI-009-KHKK</Text>
              <View style={tw`flex-row justify-center gap-4`} >
              <Button
          onpress={() => {
            
          }}
          title="Share"
        />
         <Button
          onpress={() => {
            navigation.push("initialScreenMeet",{meetId:"XTI-009-KHKK"})
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
      </BottomSheetComponent>
    </View>
  );
};

export default Home;
