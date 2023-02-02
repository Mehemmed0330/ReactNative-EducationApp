import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DrawBar from "../DrawerBar"

const Stack = createNativeStackNavigator()

export default function SignInStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='DrawBar'
                component={DrawBar}
                options={{
                    animation: "fade_from_bottom",
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}
