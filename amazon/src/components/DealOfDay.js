import React from "react";
import {View, Image, Text, StyleSheet, Dimensions} from "react-native"

const DealOfDay = ()=> {

    return(
        <View style = {styles.container}>
            <Text style ={{fontSize : 25, marginBottom : 15}}>Deal of the day</Text>
            <Image source = {{uri : "https://m.media-amazon.com/images/I/31I+eKei2oL._AC_SY200_.jpg"}} style ={styles.image}/>
            <Text>Save on ArtLife and more</Text>
            <Text>Price: €292.46</Text>
            <Text style ={{color : "blue", marginTop : 15}}>See all deals</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    image : {
        width : Dimensions.get("window").width* 0.9,
        height : Dimensions.get("window").height * 0.2
    },
    container : {
        borderColor : "white",
        elevation : 20,
        marginVertical :2,
        backgroundColor : "white",
        padding : 10,
    }
})

export {DealOfDay};