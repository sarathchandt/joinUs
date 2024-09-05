import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import tw from './src/lib/tailwind';
import { useDeviceContext } from 'twrnc';
import RootNavigation from './src/navigators/RootNavigation';
import RegisterNavigators from './src/navigators/RegisterNavigators';

function App(): React.JSX.Element {
  useDeviceContext(tw);


  const isLogedIn = false;
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.lighter} />
      <NavigationContainer>
        <View style={tw`flex-1 bg-white`}>
          {isLogedIn ? (
            <View style={tw`flex-1 `}>
              <RootNavigation/>
            </View>
          ) : (
            <View style={tw`flex-1 `}>
              <RegisterNavigators/>
            </View>
          )}
        </View>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
