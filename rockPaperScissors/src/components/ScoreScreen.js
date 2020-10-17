import React from "react";
import {View, Text, StyleSheet} from "react-native";

const ScoreScreen = ({userScore, computerScore})=>{
    return(
        <View style={{flex : 0.15}}>
            <View style = {styles.textContainer}>
                <Text style = {styles.text}>You: {userScore}</Text>
                <Text style = {styles.text}>Computer: {computerScore}</Text>
            </View>
            <View style ={styles.barContainer}>
                <View style ={{flex : userScore, backgroundColor : "#ff5bff", borderTopLeftRadius : 25,borderBottomLeftRadius : 25}}></View>
                <View style ={{flex : computerScore, backgroundColor : "#8187ff", borderTopRightRadius : 25,borderBottomRightRadius : 25}}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer : {
        flex : 1,
        flexDirection : "row",
        justifyContent : "space-between",
        marginHorizontal : 20
    },
    text : {
        fontSize : 25,
        color : "white",
        fontWeight : "bold"
    },
    barContainer : {
        flex : 1,
        flexDirection : "row",
        marginHorizontal : 10,
        marginVertical : 10,
        backgroundColor : "white",
        borderRadius : 25
        
    }
})

export {ScoreScreen};