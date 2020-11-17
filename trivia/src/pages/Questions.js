import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  Animated
} from 'react-native';
import {useSelector, useDispatch} from "react-redux"
import { QuestionItem } from '../components';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';



const Questions = (props) => {
  const listRef= useRef(null)
const [currentIndex, setCurrentIndex] = useState(1)
 const questionsList = useSelector(state=>state.questions)
 const score = useSelector(state=>state.score)
 const renderQuestion =({item})=><QuestionItem questionObject={item} onAnswer={answer} />
 const dispatch = useDispatch()
 const key = useSelector(state=>state.questionKey)
  const answer=(result)=>{
    dispatch({type: "SET_SCORE", payload:{score: result ? 1 : -1}})
    if(currentIndex >questionsList.length-1){
      return props.navigation.navigate("Finish")
    }
    listRef.current.scrollToIndex({index: currentIndex})
    setCurrentIndex(currentIndex + 1)
    dispatch({type:"SET_QUESTION_KEY"})
  }
 return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor:"#3949ab"}}>
      <Text style={{position:"absolute", top:5,right:5,color:"white", fontSize : 20, fontWeight : "bold"}}>Score: {score}</Text>
      <View style={{alignItems: "center", paddingTop:30}}>
        <CountdownCircleTimer
        key={key}
        isPlaying={true}
        onComplete={()=> answer(false)}
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
        <FlatList
        ref={listRef}
        keyExtractor={(_,i)=>i.toString()}
        horizontal
        scrollEnabled={false}
        data={questionsList}
        renderItem={renderQuestion}
        />
      </View>
    </SafeAreaView>
  );
};

export {Questions};
