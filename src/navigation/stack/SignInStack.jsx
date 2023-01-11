import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignIn from '../../screen/SignIn'

const Stack = createNativeStackNavigator()

export default function SignInStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='SignIn'
                component={SignIn}
                options={{
                    animation: "fade_from_bottom",
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}
