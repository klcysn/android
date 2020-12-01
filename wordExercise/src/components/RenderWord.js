import React, { useEffect, useState } from "react";
import {SafeAreaView, Text, FlatList, TouchableOpacity} from "react-native"
import styles from "../../styles"

export const RenderWord = (props) =>{
    return(
        <TouchableOpacity style = {styles.wordContainer} onPress={() => props.onPress(props.item.word)}>
            <Text style={styles.wordText}>{props.isPressed ? props.item.meaning : props.item.word}</Text>   
        </TouchableOpacity>
    )
}