import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Random, Add} from '../pages';

const Stack = createStackNavigator();
export const StackRouter = () =>{
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Random" component={Random} />
            <Stack.Screen name="Add" component={Add} />
        </Stack.Navigator>
    )
} 
