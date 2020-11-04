import * as React from 'react';
import {SafeAreaView, View, Text, TextInput, TouchableOpacity} from "react-native"
import styles from "../styles"


export const Input =(props)=>{
    return(
        <TextInput
        style={styles.input}
        placeholder = {props.placeholder}
        keyboardType =  {props.type}
        secureTextEntry={props.password}
        onChangeText={(text)=>props.onChanged(text)} />
    )
}