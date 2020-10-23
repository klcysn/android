import React, { useState } from "react";
import {SafeAreaView, View, Text, FlatList} from "react-native";
import PostCard from "../component/PostCard"
import Person from "./Person"

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator()


const TimeLine =()=>{

    return(
        
        <Stack.Navigator screenOptions={{headerShown : false, gestureEnabled : true}}>
            <Stack.Screen name ="People" component ={PostCard} />
            <Stack.Screen name = "Person" component ={Person} />
        </Stack.Navigator>
    
    )
}

export {TimeLine}