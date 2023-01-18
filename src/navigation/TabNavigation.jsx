import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import WelcomeStack from './stack/WelcomeStack'
import SignUpStack from './stack/SignUpStack'
import SignInStack from './stack/SignInStack'
import SelectionStack from './stack/SelectionStack'
import ProvinceStack from './stack/ProvinceStack'
import ExploreStack from './stack/ExploreStack'
import StreamStack from './stack/StreamStack'
import ClassWorkStack from "./stack/ClassWorkStack"

// Icons
import ExploreIcon from "react-native-vector-icons/Entypo"
import StreamIcon from "react-native-vector-icons/Entypo"
import ClassWorkIcon from "react-native-vector-icons/FontAwesome5"

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
                    tabBarStyle: {
                        borderTopRightRadius: 13,
                        borderTopLeftRadius: 13,
                        paddingBottom: 10,
                        height: 70

                    },
                    tabBarButton: ["Welcome", "Sign up", "Sign in", "Selection", "province"].includes(route.name)
                        ? () => {
                            return null;
                        }
                        : undefined,
                    tabBarActiveTintColor: "#5667FD",
                    tabBarInactiveTintColor: "#364356",
                    tabBarLabelStyle: {
                        fontSize: 13,
                        fontWeight: "500"

                    },
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
                    options={{
                        title: "Explore",
                        tabBarIcon: ({ color = "5667FD", size }) => (
                            <ExploreIcon name='browser' color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name='stream'
                    component={StreamStack}
                    options={{
                        title: "Stream",
                        tabBarIcon: ({ color, size }) => (
                            <StreamIcon name='blackboard' color={color} size={size} />
                        )
                    }} />
                <Tab.Screen
                    name='classWorkStack'
                    component={ClassWorkStack}
                    options={{
                        title: "ClassWork",
                        tabBarIcon: ({ color, size }) => (
                            <ClassWorkIcon name='book-open' color={color} size={size} />
                        )
                    }} />
            </Tab.Navigator>

        </>
    )
}
