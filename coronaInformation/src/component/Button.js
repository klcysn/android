import * as React from 'react';
import {SafeAreaView, View, Text, TextInput, TouchableOpacity} from "react-native"
import styles from "../styles"

export const Button =(props)=>{
    return(
        <TouchableOpacity
        style={styles.buttonContainer}
        onPress={()=>props.onPressed()}
        >
            <Text style={styles.buttonText}>{props.name}</Text>
        </TouchableOpacity>
    )
}