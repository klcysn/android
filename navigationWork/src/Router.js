import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {HomeScreen, TimeLine} from "./pages"

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()

function Router(){
    return(
        <NavigationContainer>
            <Tab.Navigator tabBarOptions={{labelStyle:{fontSize : 20, justifyContent : "center", padding : 8}}}>
                <Tab.Screen name = "Home" component ={HomeScreen} />
                <Tab.Screen name = "People" component ={TimeLine} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Router; 