import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Button
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SearchBar} from "../components"

const TopSection = () => {
    return(
        <View style ={{backgroundColor : "#18ffff"}}>
            <View style ={{flexDirection : "row",
            alignItems : "center",
            padding : 5,
            justifyContent : "space-between",
            paddingHorizontal : 15}}>
                <View style ={{flexDirection : "row", alignItems : "center"}}>
                    <Icon.Button name="bars" backgroundColor = "rgba(0,0,0,0)" color = "black" size = {25} />
                    <Image source={require("../assets/amazon.png")}
                    style ={{width : Dimensions.get("window").width * 0.4,
                    height : Dimensions.get("window").height * 0.05,
                    }}/>
                </View>
                <Icon name = "shopping-cart" size ={25} />
            </View>
            <View>
                <SearchBar />
            </View>
        </View>
    )
}

export {TopSection}