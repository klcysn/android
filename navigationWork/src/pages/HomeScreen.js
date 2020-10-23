import React from "react";
import {View, Text, SafeAreaView} from "react-native";
import styles from "../../styles"


const HomeScreen = ()=>{

    return(
        <SafeAreaView style={styles.homeContainer}>
            <Text style={styles.homeText}>Welcome to Navigation</Text>
        </SafeAreaView>
    )
}

export {HomeScreen};