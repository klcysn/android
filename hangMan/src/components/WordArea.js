import React from "react"
import {FlatList, Text, View} from "react-native"
import styles from "../styles"

const WordArea = ()=>{
    const wordList = ["absurd", "awkward", "clarusway", "funny", "galaxy", "joking", "fullstack", "strength", "puzzling", "kilobyte", "keyhole", "cycle", "loop", "slack", "function", "fixable", "buzzard", "avenue", "lengths", "monitor", "information"];
    const i = Math.floor(Math.random() * 21)
    const selectedWord = wordList[i].split("")

    const WordPrint = ({item})=>{
        console.log(selectedWord)
        return(
            <View style={styles.letterContainer}>
                <Text style={[styles.letter, {opacity : 0}]}>{item}</Text>
            </View>
        )
    }
    return(
        <View style ={styles.wordAreaContainer}>
            <FlatList
            data ={selectedWord}
            renderItem = {WordPrint}
            keyExtractor = {(item, index)=>index.toString()}
            numColumns = {10}
             />
        </View>
    )
}

export {WordArea}