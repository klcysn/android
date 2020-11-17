import React from 'react';
import {SafeAreaView, View, FlatList, Text, Button} from 'react-native';

import {finishPage} from './styles';

import {useSelector} from 'react-redux'

const Finish = (props) => {

  const score = useSelector(state=>state.score)

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={finishPage.container}>
      <Text style={finishPage.text}>Your Score is {score}</Text>
      </View>
    </SafeAreaView>
  );
};

export {Finish};
