import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Introduction, Jobs, SavedJobs} from "./pages"

const Stack = createStackNavigator();

const Router =()=>{
    return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Introduction" component={Introduction} />
        <Stack.Screen name="Jobs" component={Jobs} />
        <Stack.Screen name="SavedJobs" component={SavedJobs} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default Router