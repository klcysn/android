import React from 'react';
import {View, Animated} from 'react-native';
import Modal from 'react-native-modal';


const TimerComponent = (props) => {
  return (
    <View style={{alignItems: "center"}}>
        <CountdownCircleTimer
        isPlaying={true}
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
  );
};

export {TimerComponent};
