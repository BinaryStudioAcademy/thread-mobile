import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthScreenName } from 'common/enums/enums';
import Login from 'screens/login/login';
import Register from 'screens/register/register';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false
};

const Auth = () => (
  <Stack.Navigator screenOptions={screenOptions}>
    <Stack.Screen name={AuthScreenName.LOGIN} component={Login} />
    <Stack.Screen name={AuthScreenName.REGISTER} component={Register} />
  </Stack.Navigator>
);

export default Auth;
