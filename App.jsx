// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import TabNavigation from "./src/navigation/TabNavigation"
// import DrawerBar from './src/navigation/DrawerBar';




function App() {

  return (
    <>
      <NavigationContainer>
        <TabNavigation />
        {/* <DrawerBar /> */}
      </NavigationContainer>

    </>

  );
}


export default App;