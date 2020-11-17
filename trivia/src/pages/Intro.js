import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {introPage} from './styles';
import axios from 'axios';
import {CategorySelectModal, TimerComponent} from '../components';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';

const Intro = (props) => {
  const [visibility, setVisibility] = useState(false)
  const [category, setCategory] = useState({})
  const [timerFlag, setTimerFlag] = useState(false)
  const dispatch = useDispatch()
  const startGame = (item)=>{
    axios.get(`https://opentdb.com/api.php?amount=10&category=${item.id}&type=boolean`)
    .then(res=>{
      dispatch({type:"SET_QUESTIONS",payload:{questions:res.data.results}})
    })
    setCategory(item)
    setVisibility(false)
    setTimerFlag(true)
  }


  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={introPage.container}>
        <Text style={introPage.bannerText}>Trivia!</Text>
      </View>
      <View style={{backgroundColor:"#3949ab",padding:0}}>
      <View style={{alignItems: "center"}}>
        <CountdownCircleTimer
        isPlaying={timerFlag}
        onComplete={()=>props.navigation.navigate("Questions")}
        duration={5}
        colors={[
          ["#fff176", 0.4],
          ["#ba68c8", 0.4],
          ["#ff8a65", 0.2],
        ]}
        >
          {({remainingTime, animatedColor})=>(
            <Animated.Text style={{color: animatedColor, fontSize:60}}>
              {remainingTime}
            </Animated.Text>
          )}
        </CountdownCircleTimer>
      </View>
      </View>

      <View style={introPage.container}>
        <TouchableOpacity
        style={introPage.buttonContainer}
        onPress={()=>setVisibility(true)}
        >
          <Text style={introPage.buttonText}>Start!</Text>
        </TouchableOpacity>
      </View>

      <CategorySelectModal
      visibility={visibility}
      onClose={()=>setVisibility(false)}
      onCategorySelect={startGame}
      />
    </SafeAreaView>
  );
};

export {Intro};
