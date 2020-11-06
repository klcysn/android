import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import { cityStyle } from '../styles';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

const City = (props) => {
  return (
    <TouchableOpacity style={cityStyle.container} onPress ={props.onPressed}>
      <Icon name="home-city-outline" size={20} />
      <Text style={cityStyle.text}>{props.city}</Text>
    </TouchableOpacity>
  );
};

export {City};
