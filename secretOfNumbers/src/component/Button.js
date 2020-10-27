import React from "react";
import {Text, TouchableOpacity} from "react-native";
import styles from "../styles"

const Button =(props)=>{

    return(
        <TouchableOpacity style={styles.button} onPress={()=>props.random()} >
            <Text style={styles.buttonText}>Random</Text>
        </TouchableOpacity>
    )
}

export default Button;