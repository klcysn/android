import React from "react";
import {View, TextInput} from "react-native"
import styles from "../../styles"


export const Input = (props) =>{
    return(
        <View style={styles.inputContainer}>
            <TextInput placeholder={props.placeholder} onChangeText={props.onChange} />
        </View>
    )
}