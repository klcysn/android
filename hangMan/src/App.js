import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ImageBackground,
  FlatList,
  Alert
} from 'react-native';
import styles from "./styles"
import {Top, LetterInput} from "./components"

const App = () => {
  const [count, setCount] = useState(0)
  const imageList =[
    require("./components/assets/0.png"),
    require("./components/assets/1.png"),
    require("./components/assets/2.png"),
    require("./components/assets/3.png"),
    require("./components/assets/4.png"),
    require("./components/assets/5.png"),
    require("./components/assets/6.png")
]
  const wordList = ["absurd", "awkward", "clarusway", "funny", "galaxy", "joking", "fullstack", "strength", "puzzling", "kilobyte", "keyhole", "cycle", "loop", "slack", "function", "fixable", "buzzard", "avenue", "lengths", "monitor", "information"];
  const [i, setI] = useState(0)
  const selectedWord = wordList[i].toUpperCase().split("")
  const [knownWord, setKnownWord] = useState([])
  const [wrongWord, setWrongWord] = useState([])

  useEffect(()=>{
    setI(Math.floor(Math.random() * 21))
  }, [])

  const WordPrint = ({item})=>{
      console.log(selectedWord)
      return(
          <View style={styles.letterContainer}>
              <Text style={[styles.letter, {opacity : knownWord.includes(item) ? 1 : 0}]}>{item}</Text>
          </View>
      )
  }

  const check  =(letter)=>{
    const newKnown = [...knownWord]
    const newWrong = [...wrongWord]

    if(newKnown.includes(letter) || newWrong.includes(letter)){
      return alert(`You have already pressed ${letter}`)
    }

    if(selectedWord.includes(letter)){
      newKnown.push(letter)
      setKnownWord(newKnown)
      if(newKnown.length ==selectedWord.length - 1){Alert.alert("You Won!\nLet's play again", "You saved man", 
      [{
        text : "Play Again",
        onPress : ()=> {
          setI(Math.floor(Math.random() * 21)),
          setCount(0)
          setKnownWord([])
          setWrongWord([])
        }
         }]
      )}
    }else{
      newWrong.push(letter)
      setWrongWord(newWrong)
      if(wrongWord.length == 5){Alert.alert("Man was hanged!\nLet's play again", `Word was ${selectedWord.join("")}`, 
      [{
        text : "Play Again",
        onPress : ()=> {
          setI(Math.floor(Math.random() * 21)),
          setCount(0)
          setKnownWord([])
          setWrongWord([])
        }
         }]
      )}
      setCount(count + 1)
      
      
    }
    console.log(wrongWord, knownWord)
  }

  return (
    <SafeAreaView>
      <ImageBackground source = {require("./components/assets/notebook.jpg")} style={styles.backgroundImage}>
        <LetterInput letter ={(letter)=>check(letter)} />
        <Top />
        <View style ={styles.wordAreaContainer}>
            <FlatList
            data ={selectedWord}
            renderItem = {WordPrint}
            keyExtractor = {(item, index)=>index.toString()}
            numColumns = {10}
             />
        </View>
        <View style = {styles.manContainer}>
          <Image source ={imageList[count]} style={styles.man} />
          <View style ={{opacity : wrongWord.length == 0 ? 0 : 1}}>
            <Text style = {styles.wrongWord}>Wrong Words</Text>
            <Text style = {styles.wrongWord}>{wrongWord.join(", ")}</Text>
          </View>
        </View>

      </ImageBackground>

    </SafeAreaView>
  )
}

export default App;
