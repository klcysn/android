import React from 'react';
import {TouchableOpacity, Text, Image, View} from 'react-native';
import { restaurantItem } from '../styles';



const RestaurantItem = (props) => {

  return (
    <TouchableOpacity style={restaurantItem.container} onPress ={props.onSelect}>
      <Image style={restaurantItem.image} source={{uri:props.item.image_url}} />
      <View>
        <Text style={restaurantItem.head}>{props.item.name}</Text>
        <Text style={restaurantItem.text}>{props.item.area}</Text>
        <Text style={restaurantItem.text}>{props.item.address}</Text>
        <Text style={restaurantItem.text}>{props.item.postal_code}</Text>
        <Text style={restaurantItem.text}>Tel : {props.item.phone}</Text>
        <Text style={[restaurantItem.head, {color:"gold"}]}>Price : {"€".repeat(props.item.price)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export {RestaurantItem};