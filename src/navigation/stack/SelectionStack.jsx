import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Selection from '../../screen/Selection'

const Stack = createNativeStackNavigator()

export default function SelectionStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='selection'
                component={Selection}
            />
        </Stack.Navigator>

    )
}
