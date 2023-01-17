// In App.js in a new project

import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabNavigation from "./src/navigation/TabNavigation"



const Tab = createBottomTabNavigator();


const Stack = createNativeStackNavigator();

function App() {

  return (
    <>
      <NavigationContainer>
        {/* <Stack.Navigator >
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
        </Stack.Navigator> */}
        {/* {navigation.navigate === "SignUp" ? <TabNavigation /> : null} */}
        <TabNavigation />


      </NavigationContainer>



    </>

  );
}


export default App;