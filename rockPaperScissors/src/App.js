
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Alert
} from 'react-native';
import { MyButton, Roll, ScoreScreen } from './components';


const App = () => {
  const [num, setNum] = useState(0)
  const [userSelect, setUserSelect] = useState(3)
  const [plays, setPlays] = useState("")
  const [userScore, setUserScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0)
  const [scoreText, setScoreText] = useState("")

  useEffect(()=>{
    setPlays(clearTimeout(plays))

    if(userSelect == 0 && num == 1){
      setScoreText("You lost!\n Paper wraps rock")
      setComputerScore(computerScore + 1)
    }else if(userSelect == 0 && num == 2){
      setScoreText("You Won!\n Rock crushs scissors")
      setUserScore(userScore + 1)
    }else if(userSelect == 0 && num == 0){
      setScoreText("Draw")
    }else if(userSelect == 1 && num == 0){
      setScoreText("You Won!\nPaper wraps rock")
      setUserScore(userScore + 1)
    }else if(userSelect == 1 && num == 1){
      setScoreText("Draw")
    }else if(userSelect == 1 && num == 2){
      setScoreText("You lost!\nScissors cuts paper")
      setComputerScore(computerScore + 1)
    }else if(userSelect == 2 && num == 0){
      setScoreText("You lost!\nRock crushs scissors")
      setComputerScore(computerScore + 1)
    }else if(userSelect == 2 && num == 1){
      setScoreText("You Won!\nScissors cuts paper")
      setUserScore(userScore + 1)
    }else if(userSelect == 2 && num == 2){
      setScoreText("Draw")}

    setTimeout(()=>{
      setUserSelect(3)
      setScoreText("")
    }, 2000)

    if(userScore == 3 || computerScore ==3){
      Alert.alert(`${userScore > computerScore ? "You" : "Computer"} Won`,"",[{text :"Play again!", onPress : reset}])
    }
  }, [userSelect])

  const reset = ()=>{
    setScoreText("")
    setUserScore(0)
    setComputerScore(0)
    setUserSelect(3)
    setNum(0)
}
  
  const play = () => {
    
    setNum(Math.floor(Math.random() * 3))
    setPlays(setTimeout(play, 200))
  }
  return (
    <SafeAreaView style = {styles.container}>
      <ScoreScreen computerScore ={computerScore} userScore ={userScore}/>
      <Text style={{fontSize : 30,color : "#313409",fontWeight : "bold",fontFamily : "monospace", flex : 0.15, marginLeft : 10}}>{scoreText}</Text>
      <View style ={{flex : 1, marginTop : 30}}>
      <Roll roll ={num} selected = {userSelect} scoreText ={scoreText} />
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
