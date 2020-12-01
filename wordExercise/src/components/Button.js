import React from "react";
import {TouchableOpacity, Text} from "react-native"
import styles from "../../styles"


export const Button = (props) =>{
    return(
        <TouchableOpacity
        style={[styles.buttonContainer, {backgroundColor: props.color}]}>
            <Text style={styles.buttonText}>{props.title}</Text>
        </TouchableOpacity>
    )
}