import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import RootNavigation from 'navigation/navigation';
import store from 'store/store';

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  </Provider>
);

export default App;
