import React from 'react'
import Welcome from '../../screen/Welcome'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export default function WelcomeStack() {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen
                    name='Wel'
                    component={Welcome}
                    options={{
                        headerShown: false,
                        animation: "slide_from_left"
                    }}
                />
            </Stack.Navigator>

        </>
    )
}
