import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Home} from "./pages"

const Stack = createStackNavigator();

const App = () => {
  return (
   <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
   </NavigationContainer>
  );
};


export default App;
