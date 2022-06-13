import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { SafeAreaView } from 'components/components';
import { NavigationTheme } from 'config/config';
import { RootNavigation } from 'navigation/navigation';
import { store } from 'store/store';

const App = () => (
  <Provider store={store}>
    <SafeAreaView />
    <NavigationContainer theme={NavigationTheme}>
      <RootNavigation />
    </NavigationContainer>
  </Provider>
);

export { App };
