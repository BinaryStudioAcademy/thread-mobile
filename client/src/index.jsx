import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { Toast } from 'components/components';
import { NavigationTheme } from 'config/config';
import RootNavigation from 'navigation/navigation';
import store from 'store/store';

const App = () => (
  <Provider store={store}>
    <NavigationContainer theme={NavigationTheme}>
      <RootNavigation />
    </NavigationContainer>
    <Toast />
  </Provider>
);

export default App;
