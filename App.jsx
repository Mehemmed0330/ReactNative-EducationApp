// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from "./src/screen/Welcome"
import SignIn from "./src/screen/SignIn"
import SignUp from "./src/screen/SignUp"
import Selection from "./src/screen/Selection"
import Province from "./src/screen/Province"
import Explore from './src/screen/Explore';



const Stack = createNativeStackNavigator();




function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Welcome" component={Welcome} options={{
          headerShown: false,
          title: "",
          headerStyle: {
            backgroundColor: "rgb(244,245,249)",
          },
          headerShadowVisible: false, // applied here
        }} />
        <Stack.Screen name="SignIn" component={SignIn} options={{
          headerShown: false,
          title: "",
          headerStyle: {
            backgroundColor: "rgb(244,245,249)",
          },
          headerTitleAlign: 'center',
          animation: 'slide_from_right',
          headerShadowVisible: false,
        }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{
          headerShown: false,
          title: "",
          headerStyle: {
            backgroundColor: "rgb(244,245,249)",
          },
          headerTitleAlign: 'center',
          animation: 'slide_from_right',
          headerShadowVisible: false,
        }} />
        <Stack.Screen name="Selection" component={Selection} options={{
          title: "",
          headerShown: false,
          headerStyle: {
            backgroundColor: "rgb(244,245,249)",

          },
          headerShadowVisible: false, // applied here
          animation: 'slide_from_right',

        }} />
        <Stack.Screen name="Province" component={Province} options={{
          title: "",
          headerShown: false,
          headerStyle: {
            backgroundColor: "rgb(244,245,249)",

          },
          headerShadowVisible: false, // applied here
          animation: 'slide_from_right',

        }} />
        <Stack.Screen name="Explore" component={Explore} options={{
          title: "",
          headerShown: false,
          headerStyle: {
            backgroundColor: "rgb(244,245,249)",

          },
          headerShadowVisible: false, // applied here
          animation: 'slide_from_right',

        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;