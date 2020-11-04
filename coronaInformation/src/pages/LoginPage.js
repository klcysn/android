import * as React from 'react';
import {Login, SignUp} from "../pages"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();



export const LoginPage = (props)=>{
    

    return(

    <Tab.Navigator>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Sign Up" component={SignUp} />
    </Tab.Navigator>
  
    )
}