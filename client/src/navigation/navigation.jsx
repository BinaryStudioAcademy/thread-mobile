import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootScreenName } from 'common/enums/enums';
import Auth from './auth/auth.navigation';
import Thread from './thread/thread.navigation';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false
};

const RootNavigation = () => (
  <Stack.Navigator screenOptions={screenOptions}>
    <Stack.Screen name={RootScreenName.AUTH} component={Auth} />
    <Stack.Screen name={RootScreenName.THREAD} component={Thread} />
  </Stack.Navigator>
);

export default RootNavigation;
