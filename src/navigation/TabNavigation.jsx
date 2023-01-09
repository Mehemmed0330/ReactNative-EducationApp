import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import WelcomeStack from './stack/WelcomeStack'
import SignUpStack from './stack/SignUpStack'

const Tab = createBottomTabNavigator()

export default function index() {

    return (
        <>
            <Tab.Navigator
                screenOptions={{ headerShown: false }}
            >
                <Tab.Screen
                    name="Welcome"
                    component={WelcomeStack}
                    options={{
                        // tabBarStyle: { display: "none" },
                        animationEnabled: true

                    }
                    }

                />
                <Tab.Screen
                    name="Sign Up"
                    component={SignUpStack}
                // options={{ tabBarStyle: { display: "none" } }}
                />

            </Tab.Navigator>

        </>
    )
}
