import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {Trivia, Date, Year, Number} from "./pages"

const Drawer = createDrawerNavigator();


const Router =()=>{
    return(
        <NavigationContainer>
            <Drawer.Navigator
            edgeWidth ={100}
            drawerStyle={{backgroundColor : "#40c4ff", width : 450}}
            drawerContentOptions={{activeTintColor : "white",
            inactiveTintColor : "black",
            activeBackgroundColor : "#7ecb20",
            labelStyle:{fontSize : 20, borderBottomWidth : 1, fontWeight : "bold"}}}>
                <Drawer.Screen name="Trivia" component ={Trivia} />
                <Drawer.Screen name = "Date" component ={Date} />
                <Drawer.Screen name = "Year" component = {Year} />
                <Drawer.Screen name = "Number" component = {Number} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default Router;