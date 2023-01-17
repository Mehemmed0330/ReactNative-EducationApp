import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import WelcomeStack from './stack/WelcomeStack'
import SignUpStack from './stack/SignUpStack'
import SignInStack from './stack/SignInStack'
import SelectionStack from './stack/SelectionStack'
import ProvinceStack from './stack/ProvinceStack'
import ExploreStack from './stack/ExploreStack'

const Tab = createBottomTabNavigator()

export default function index() {

    return (
        <>
            <Tab.Navigator
                // screenOptions={{
                //     headerShown: false,

                // }}

                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarButton: ["Welcome", "Sign up", "Sign in", "Selection", "province"].includes(route.name)
                        ? () => {
                            return null;
                        }
                        : undefined
                })}

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
                    options={{
                        tabBarStyle: { display: "none" },
                    }}
                />
                <Tab.Screen
                    name="province"
                    component={ProvinceStack}
                    options={{
                        tabBarStyle: { display: "none" },


                    }}
                />
                <Tab.Screen
                    name='explore'
                    component={ExploreStack}
                // options={{
                //     tabBarShowLabel: false,
                // }}
                // options={({ route }) => ({
                //     tabBarShowLabel: ({ }) => {
                //         if (route.name === "explore") {
                //             return console.log("explore")
                //         }
                //     }
                // })}
                />

            </Tab.Navigator>

        </>
    )
}
