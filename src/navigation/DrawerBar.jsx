import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Welcome from '../screen/Welcome';

const Drawer = createDrawerNavigator();


export default function DrawerBar() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Draw" component={Welcome} />
    </Drawer.Navigator>
  )
}
