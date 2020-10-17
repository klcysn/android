
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert
} from 'react-native';
import { MyButton, Roll, ScoreScreen } from './components';


const App = () => {
  const [num, setNum] = useState(0)
  const list = [require("./components/assets/1.png"), require("./components/assets/2.png"), require("./components/assets/3.png")]
  const [userSelect, setUserSelect] = useState("4")
  console.log(userSelect == "" ? "bos" : userSelect )
  const [plays, setPlays] = useState("")
  const [userScore, setUserScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0)

  useEffect(()=>{
    setPlays(clearTimeout(plays))

    if(userSelect == 0 && num == 1){
      Alert.alert("You lost!", "Paper wraps rock", [{text : "Continue", onPress : play, style : "cancel"}])
      setComputerScore(computerScore + 1)
    }else if(userSelect == 0 && num == 2){
      Alert.alert("You Won!", "Rock crushs scissors", [{text : "Continue", onPress : play, style : "cancel"}])
      setUserScore(userScore + 1)
    }else if(userSelect == 0 && num == 0){
      Alert.alert("Draw", [{text : "Continue", onPress : play, style : "cancel"}])
    }else if(userSelect == 1 && num == 0){
      Alert.alert("You Won!", "Paper wraps rock", [{text : "Continue", onPress : play, style : "cancel"}])
      setUserScore(userScore + 1)
    }else if(userSelect == 1 && num == 1){
      Alert.alert("Draw", [{text : "Continue", onPress : play, style : "cancel"}])
    }else if(userSelect == 1 && num == 2){
      Alert.alert("You lost!", "Scissors cuts paper", [{text : "Continue", onPress : play, style : "cancel"}])
      setComputerScore(computerScore + 1)
    }else if(userSelect == 2 && num == 0){
      Alert.alert("You lost!", "Rock crushs scissors", [{text : "Continue", onPress : play, style : "cancel"}])
      setComputerScore(computerScore + 1)
    }else if(userSelect == 2 && num == 1){
      Alert.alert("You Won!", "Scissors cuts paper", [{text : "Continue", onPress : play, style : "cancel"}])
      setUserScore(userScore + 1)
    }else if(userSelect == 2 && num == 2){
      Alert.alert("Draw", [{text : "Continue", onPress : play, style : "cancel"}])
    }
  }, [userSelect])
  
  const play = () => {
    setNum(Math.floor(Math.random() * 3))
    console.log("play userselect", userSelect)
    setPlays(setTimeout(play, 100))
    setUserSelect("4")
  }
  return (
    <SafeAreaView style = {styles.container}>
      <ScoreScreen computerScore ={computerScore} userScore ={userScore}/>
      <View style ={{flex : 1, marginTop : 30}}>
      <Roll roll ={num} selected = {userSelect} />
      <MyButton sendValue = {(value)=> setUserSelect(value)} />
      </View>
      <TouchableOpacity style = {styles.play} onPress={play}>
        <Text style = {styles.playText}>Play</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : "#81c784",
    justifyContent : "space-around"
  },
play : {
  backgroundColor : "#fb8c00",
  width : Dimensions.get("window").width,
  height : Dimensions.get("window").height * 0.1,
  justifyContent : "center"
},
playText : {
  fontSize : 40,
  color : "white",
  textAlign : "center",
  fontWeight  :"bold"
}
});

export default App;
