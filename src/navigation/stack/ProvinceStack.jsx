import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Province from '../../components/Province'

const Stack = createNativeStackNavigator()
export default function ProvinceStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Province"
                component={Province}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}
