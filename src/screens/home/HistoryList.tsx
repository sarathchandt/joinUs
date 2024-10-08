import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import tw from '../../lib/tailwind';
import CardComponent from '../../components/CardComponent';
import Temp from '../Temp';

const HistoryList = () => {
  const historyData = true; // later it will change to the api call
  return (
    <View style={tw`flex-1 px-4 mt-4 `}>
      
        {!historyData ? (
          <Text style={tw`text-blueVarients-110 text-center my-auto pb-4`}>
            The history will show here
          </Text>
        ) : (
            <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            {[...Array(10)].map((data, i) => {
              return (
                <CardComponent key={i}>
                  <View style={tw`h-230px  `}></View>
                </CardComponent>
              );
            })}
          </View>
     
      </ScrollView>
        )}
    </View>
  );
};

export default HistoryList;
