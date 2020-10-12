import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = () => {
    const [focused, setFocused] = useState(false)
  return (
    <View style ={{borderWidth : 1,
    margin : 10,
    flexDirection : "row",
    alignItems : "center",
    justifyContent : "space-between",
    paddingHorizontal : 5,
    borderRadius : 10,
    backgroundColor : "white"
    }}>
      <View style={{flexDirection : "row", alignItems : "center"}}>
      <Icon name="search" size={20} color="black" />
      <TextInput placeholder = {!focused ? "What are you looking for ?" : "Search"}
      style ={{fontSize : 18, marginLeft : 10}}
      onFocus = {()=>{setFocused(true)}}
      
      />
      </View>
      
      <Icon name = "camera" size ={20} color="#9A9DA0" style ={{borderLeftWidth : 1, paddingLeft : 5, borderColor : "gray", paddingVertical : 2}} />
    </View>
    
  );
};


export {SearchBar};