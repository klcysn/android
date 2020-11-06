import React, { useState } from 'react';
import {View, TextInput} from 'react-native';
import {searchbarStyle} from '../styles';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

const SearchBar = (props) => {
  const [input, setInput]=useState("")
  return (
    <View style={searchbarStyle.container}>
      <Icon name="magnify" size ={20} color = "gray" />
      <TextInput
      style={searchbarStyle.input} value={props.inputValue}
      placeholder="Search a city..."
      onChangeText={(text)=>{
        props.onSearch(text)
      }}
      />
    </View>

  );
};

export {SearchBar};
