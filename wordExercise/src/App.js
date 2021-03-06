import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StackRouter} from "./Router"
import Unknown from "./pages/Unknown"
import Learned from "./pages/Learned"
import AddPage from "./pages/AddPage"

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      tabBarOptions={{
        activeBackgroundColor: "#b91400",
        inactiveBackgroundColor: "#1c313a",
        activeTintColor: "white",
        labelStyle:{fontSize: 18, padding: 5}}}
        >
        <Tab.Screen name="Home" component={StackRouter} />
        <Tab.Screen name="Unknown" component={Unknown} />
        <Tab.Screen name="Learned" component={Learned} />
        <Tab.Screen name="Add Page" component={AddPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
