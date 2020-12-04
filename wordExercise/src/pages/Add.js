import React from "react";
import {SafeAreaView} from "react-native"
import {Input} from "../components"
import styles from "../../styles"


const Add = (props) =>{
    return(
        <SafeAreaView style={styles.addContainer}>
            <Input placeholder="Please write word" />
            <Input placeholder="Please write meaning" />
        </SafeAreaView>
    )
}

export default Add
