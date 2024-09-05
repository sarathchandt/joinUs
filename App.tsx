import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.lighter} />
      <NavigationContainer>
        <View style={{flex: 1, backgroundColor: 'white'}}></View>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
