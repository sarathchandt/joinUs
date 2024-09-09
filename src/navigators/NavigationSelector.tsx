import React, {useEffect} from 'react';
import {useStore} from '../store/store';
import {View} from 'react-native';
import RootNavigation from './RootNavigation';
import RegisterNavigators from './RegisterNavigators';
import tw from '../lib/tailwind';
import {useQuery} from '@tanstack/react-query';
import {getUser} from '../lib/api';



const NavigationSelector = () => {
  const {data} = useQuery({queryKey: ['getUserData'], queryFn: getUser});

  const isUserLogedIn = useStore(state => state.isUserLoggedIn);
  const setIsUserLoggedIn = useStore(state => state.setIsUserLoggedIn);
  const setUserEmial = useStore(state => state.setUserEmailAddress);
  const setuserName = useStore(state => state.setUserName);

  useEffect(() => {
    if (data) {
      setIsUserLoggedIn(true);
      setUserEmial(data.email);
      setuserName(data.name);
    } else {
      setIsUserLoggedIn(false);
    }
  }, [data]);

  return (
    <>
      {isUserLogedIn ? (
        <View style={tw`flex-1 `}>
          <RootNavigation />
        </View>
      ) : (
        <View style={tw`flex-1 `}>
          <RegisterNavigators />
        </View>
      )}
    </>
  );
};

export default NavigationSelector;
