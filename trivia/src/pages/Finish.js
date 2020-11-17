import React from 'react';
import {SafeAreaView, View, FlatList, Text, TouchableOpacity} from 'react-native';

import {finishPage, introPage} from './styles';

import {useSelector, useDispatch} from 'react-redux'

const Finish = (props) => {

  const score = useSelector(state=>state.score)
  const dispatch = useDispatch()

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={finishPage.container}>
      <Text style={finishPage.text}>Your Score is {score}</Text>
      </View>

      <View style={introPage.container}>
        <TouchableOpacity
        style={introPage.buttonContainer}
        onPress={()=>{
          dispatch({type:"SET_SCORE", payload: {score: -score}})
          dispatch({type:"SET_KEY"})
          props.navigation.navigate("Intro")
        }}
        >
          <Text style={introPage.buttonText}>Play Again!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export {Finish};
