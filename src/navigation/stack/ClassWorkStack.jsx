import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ClassWork from "../../screen/ClassWork"

const Stack = createNativeStackNavigator()


export default function ClassWorkStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name='ClassWorkStack'
                component={ClassWork}
            />
        </Stack.Navigator>
    )
}
