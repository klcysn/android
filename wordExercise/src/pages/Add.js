import React, { useState } from "react";
import {SafeAreaView} from "react-native"
import {Input, Button} from "../components"
import styles from "../../styles"
import AsyncStorage from '@react-native-async-storage/async-storage';


const Add = (props) =>{
    const [word, setWord] = useState("")
    const [meaning, setMeaning] = useState("")
    const [addList, setAddList] = useState([])

    const addWord = (text)=>{
        setWord(text)
    }
    const addMeaning = (text)=>{
        setMeaning(text)
    }

    const storeData = async () => {
        const value = {word: word, meaning: meaning}
        try {
            const jsonValue = await AsyncStorage.getItem('@add')
            setAddList(jsonValue != null ? JSON.parse(jsonValue) : null);
          } catch(e) {
            alert(e)
          }

        try {
          const jsonValue = JSON.stringify([...addList,value])
          await AsyncStorage.setItem('@add', jsonValue)
        } catch (e) {
          alert(e)
        }
      }
    return(
        <SafeAreaView style={styles.addContainer}>
            <Input placeholder="Please write word" onChange = {addWord} />
            <Input placeholder="Please write meaning" onChange = {addMeaning} />
            <Button title="Add" color= "green" onPress={storeData} />
        </SafeAreaView>
    )
}

export {Add}
