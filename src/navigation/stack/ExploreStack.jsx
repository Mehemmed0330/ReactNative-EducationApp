import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Explore from '../../screen/Explore'
const Stack = createNativeStackNavigator()
export default function ExploreStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Explore"
                component={Explore}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}
