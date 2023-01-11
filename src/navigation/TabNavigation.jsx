import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import WelcomeStack from './stack/WelcomeStack'
import SignUpStack from './stack/SignUpStack'
import SignInStack from './stack/SignInStack'
import SelectionStack from './stack/SelectionStack'

const Tab = createBottomTabNavigator()

export default function index() {

    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,

                }}
            >
                <Tab.Screen
                    name="Welcome"
                    component={WelcomeStack}
                    options={{
                        tabBarStyle: { display: "none" },
                    }
                    }
                />
                <Tab.Screen
                    name="Sign up"
                    component={SignUpStack}
                    options={{
                        tabBarStyle: { display: "none" },
                    }}
                />
                <Tab.Screen
                    name='Sign in'
                    component={SignInStack}
                    options={{
                        tabBarStyle: { display: "none" },
                    }}
                />
                <Tab.Screen
                    name='Selection'
                    component={SelectionStack}
                />

            </Tab.Navigator>

        </>
    )
}
