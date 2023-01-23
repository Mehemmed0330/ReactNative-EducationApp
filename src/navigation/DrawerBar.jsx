import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import WelcomeStack from './stack/WelcomeStack';
import SignUpStack from './stack/SignUpStack';
import SignInStack from './stack/SignInStack';
import SelectionStack from './stack/SelectionStack';
import ProvinceStack from './stack/ProvinceStack';
import ExploreStack from './stack/ExploreStack';
import TabNavigation from "./TabNavigation"

const Drawer = createDrawerNavigator();


export default function DrawerBar() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Drawer.Screen name="explore" component={TabNavigation} />

      <Drawer.Screen name="WelcomeDraw" component={WelcomeStack} />
      <Drawer.Screen name="SignupDraw" component={SignUpStack} />
      <Drawer.Screen name="SigninDraw" component={SignInStack} />
      <Drawer.Screen name="SelectionDraw" component={SelectionStack} />
      <Drawer.Screen name="ProvinceDraw" component={ProvinceStack} />
      <Drawer.Screen name="ExploreDraw" component={ExploreStack} />


    </Drawer.Navigator>
  )
}
