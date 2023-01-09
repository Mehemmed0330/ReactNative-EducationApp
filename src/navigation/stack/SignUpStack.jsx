import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignUp from "../../screen/SignUp"

const Stack = createNativeStackNavigator()

export default function SignUpStack() {
    return (

        <Stack.Navigator>
            <Stack.Screen
                options={{ headerShown: false }}
                name='Sign up'
                component={SignUp}
            />
        </Stack.Navigator>


    )
}
