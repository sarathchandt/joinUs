import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import tw from './src/lib/tailwind';
import {useDeviceContext} from 'twrnc';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import NavigationSelector from './src/navigators/NavigationSelector';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const queryClient = new QueryClient();

function App(): React.JSX.Element {
  useDeviceContext(tw);

  return (
    <GestureHandlerRootView>

    <SafeAreaView style={tw`flex-1 bg-white`}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.lighter} />
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <View style={tw`flex-1 bg-white`}>
            <NavigationSelector />
          </View>
        </QueryClientProvider>
      </NavigationContainer>
    </SafeAreaView>
    </GestureHandlerRootView>
  );
}

export default App;
