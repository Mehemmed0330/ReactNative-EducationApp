// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from "./src/navigation/TabNavigation"





function App() {

  return (
    <>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>

    </>

  );
}


export default App;