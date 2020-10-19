import React, { useState } from "react"
import {TextInput, View} from "react-native"
import styles from "../styles"

const LetterInput = (props)=> {
    const [value, setValue] = useState("")
    return(
        <View style = {styles.inputContainer}>
            <TextInput style={styles.input}
            autoFocus ={true}
            value ={value}
            onChangeText = {(letter)=>{
                props.letter(letter.toUpperCase())
                setValue("")}}
            />
        </View>
    )
}
export {LetterInput}