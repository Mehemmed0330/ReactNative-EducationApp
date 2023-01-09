import React from 'react'
import Welcome from '../../screen/Welcome'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export default function WelcomeStack() {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen
                    name='Welcome Stack'
                    component={Welcome}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>

        </>
    )
}
