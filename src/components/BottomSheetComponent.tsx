import React from 'react';
import {View} from 'react-native-reanimated/lib/typescript/Animated';
import tw from '../lib/tailwind';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';

type BottomSheetComponentProps = {
  children: React.ReactNode;
  bottomSheetRef: React.RefObject<BottomSheetModal>;
};
const BottomSheetComponent = ({
  children,
  bottomSheetRef,
}: BottomSheetComponentProps) => {
  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        style={tw` rounded-[10px] `}
        backgroundStyle={tw`bg-blueVarients-110 `}
        handleIndicatorStyle={tw`w-0`}
        snapPoints={['30%']}
        ref={bottomSheetRef}>
        {children}
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default BottomSheetComponent;
