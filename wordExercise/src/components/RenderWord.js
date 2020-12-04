import React, { useEffect, useState } from "react";
import {SafeAreaView, Text, FlatList, TouchableOpacity} from "react-native"
import styles from "../../styles"

export const RenderWord = (props) =>{
    return(
        <TouchableOpacity
        activeOpacity={0.8}
        style = {[styles.wordContainer, {backgroundColor: props.isPressed ? "#003300" : "#7f0000"}]}
        onPress={() => props.onPress(props.item.word)}>
            <Text style={styles.wordText}>{props.isPressed ? props.item.meaning : props.item.word}</Text>
            <TouchableOpacity style={styles.crossTextContainer} onPress={() => props.onDelete(props.item.word)}>
                <Text style={styles.crossText}>✗</Text>   
            </TouchableOpacity>
        </TouchableOpacity>
    )
}