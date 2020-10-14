import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Dimensions,
  Button,
 
} from 'react-native';

const App = ()=> {
  const [word, setWord] = useState("")
  const [letter, setLetter] = useState("")
  const [seperator, setSeperator] = useState("")

  const ChangeWord = ()=>{
   
    const wordList = word.split(" ").reverse()
    return(
      <Text style = {styles.screenText}>{wordList.join(seperator)}</Text>
    )
  }

  const ChangeLetter = ()=>{
    
    const letterList = letter.split("").reverse()
    return(
      <Text style = {styles.screenText}>{letterList.join(seperator)}</Text>
    )
  }
  return (
   <SafeAreaView style = {{flex : 1}}>
     <View style={styles.screen}>
        <ScrollView>
           <ChangeWord />
           <ChangeLetter />
        </ScrollView>
     </View>
     <View style={styles.inputArea}>
        <ScrollView>
          <TextInput placeholder="Put seperator here!" value ={seperator} onChangeText ={(text) =>setSeperator(text)} style={styles.input} />
          <TextInput placeholder="Here converts words!" value={word} onChangeText ={(text)=>{setWord(text.toLocaleUpperCase())}} style={styles.input} />
          <TextInput placeholder="Here converts letters!" value ={letter} onChangeText ={(text) =>{setLetter(text.toLocaleUpperCase())}} style={styles.input} />
          <Button title = "reset" onPress ={()=>{
            setSeperator("")
            setWord("")
            setLetter("")
          }}/>
        </ScrollView>
     </View>
   </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen : {
    flex : 1,
    backgroundColor : "#aa00ff",
    padding : 10
  },
  screenText : {
    color : "white",
    fontWeight : "bold",
    fontSize : 20,
    backgroundColor : "#7200ca",
    marginVertical : 5

  },
  inputArea : {
    flex : 3,
    backgroundColor : "#e254ff",
    alignItems : "center",
    justifyContent : "center",
    paddingTop : 50
  },
  input : {
    width : Dimensions.get("window").width * 0.9,
    height : Dimensions.get("window").height * 0.08,
    backgroundColor : "white",
    margin : 20,
    fontSize : 15,
    borderRadius : 15,
    paddingLeft : 10,
    color : "black",
    fontSize : 25
    
  }
});

export default App;
