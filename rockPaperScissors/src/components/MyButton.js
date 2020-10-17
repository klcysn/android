import React, {useState} from "react";
import {TouchableOpacity, Image,StyleSheet, Dimensions, View} from "react-native"


const MyButton = (props) => {
    return(
        <View style = {styles.containerButton}>
            <TouchableOpacity style = {styles.button} onPress ={() =>{
                props.sendValue(0)
              }}>
                <Image style ={styles.imageButton} source = {require("./assets/1.png")} />
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button} onPress ={() =>{
                props.sendValue(1)
              }}>
                <Image style ={styles.imageButton} source = {require("./assets/2.png")} />
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button} onPress ={() =>{
                props.sendValue(2)
              }}>
                <Image style ={styles.imageButton} source = {require("./assets/3.png")} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    imageButton : {
        width : Dimensions.get("window").width * 0.3,
        height : Dimensions.get("window").height * 0.16, 
      },
      button : {
        flex : 1,
        width : Dimensions.get("window").width * 0.3,
        height : Dimensions.get("window").height * 0.14,
      },
      containerButton : {
        flex : 1,
        flexDirection : "row",
        justifyContent : "center",
        marginLeft : 15,
        marginTop : 10
      }
})

export {MyButton};