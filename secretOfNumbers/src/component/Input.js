import React, { useState } from "react";
import {SafeAreaView, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView} from "react-native";
import styles from "../styles"

const Input =(props)=>{
    const [inputValue, setInputValue] = useState("")
    return(
        <View style={styles.inputContainer}>
            <TextInput placeholder={props.placeholder} style={styles.input} value ={inputValue} onChangeText={(text)=>{
                setInputValue(text)
                props.input(text)
                }}/>
            <TouchableOpacity style={styles.inputButton} onPress={()=>{
                props.submit()
                setInputValue("")
                }}>
                <Text style={styles.inputButtonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Input;