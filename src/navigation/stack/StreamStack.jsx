import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Stream from '../../screen/Stream'

const Stack = createNativeStackNavigator()
export default function StreamStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,

        }}
        name='Stream'
        component={Stream}
      />
    </Stack.Navigator>

  )
}
