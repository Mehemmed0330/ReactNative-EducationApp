import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from "./src/screen/Welcome"
const Tab = createBottomTabNavigator();


export default function AppBar() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Welcome} />
            {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
        </Tab.Navigator>
    )
}
