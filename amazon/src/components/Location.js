import React from "react";
import {View, Text} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const Location = () => {

    return(
        <View style ={{flexDirection : "row", alignItems : "center", padding : 5, backgroundColor : "#00cbcc"}}>
            <Icon name = "map-marker" size = {25} />
            <Text style ={{fontSize : 15, marginLeft : 10}}>Where would you like to ship to ?</Text>
        </View>
    )
}

export {Location}