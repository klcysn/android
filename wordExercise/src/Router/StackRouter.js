import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Random} from '../pages';

const Stack = createStackNavigator();
export const StackRouter = () =>{
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Random" component={Random} />
        </Stack.Navigator>
    )
} 
