import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import * as React from 'react';
import {LoginPage, Countries, Select, Statistics} from "./pages"
import {createStore} from "redux"
import {Provider} from "react-redux"
import {reducer, initialState} from "./context"

const Stack = createStackNavigator();
const store = createStore(reducer, initialState)

function RouterStack() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions ={{headerShown : false}}>
          <Stack.Screen name="Select" component={Select} />
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="countries" component={Countries} />
          <Stack.Screen name="Statistics" component={Statistics} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default RouterStack