import React, { useState } from "react";
import {Image, Text, SafeAreaView, Button} from "react-native"
import styles from "../../styles";

const Person =(props)=>{
    const data = props.route.params.data
    return(
        <SafeAreaView style={{margin : 5}}>
            <Image source = {{uri:data.img}} style ={styles.image} />
            <Text style = {styles.timeLineHeader}>{data.userName}</Text>
            <Text>{data.description}</Text>
            <Button title="Back" onPress={()=>props.navigation.navigate("People")} />
        </SafeAreaView>
    )
}

export default Person;