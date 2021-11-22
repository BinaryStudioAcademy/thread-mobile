import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from 'navigation/navigation';

const App = () => (
  <NavigationContainer>
    <RootNavigation />
  </NavigationContainer>
);

export default App;
