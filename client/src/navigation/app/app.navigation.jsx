import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IconName, AppScreenName } from 'common/enums/enums';
import { Icon } from 'components/components';
import AddPost from 'screens/add-post/add-post';
import Profile from 'screens/profile/profile';
import Home from '../home/home.navigation';

const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarActiveTintColor: '#33BBFF',
  tabBarInactiveTintColor: '#D6D6D6',
  tabBarStyle: { minHeight: 60 }
};

const getTabOptions = icon => ({
  tabBarIcon: ({ color }) => <Icon name={icon} color={color} size={25} />
});

const App = () => (
  <Tab.Navigator screenOptions={screenOptions}>
    <Tab.Screen
      name={AppScreenName.HOME}
      component={Home}
      options={getTabOptions(IconName.HOME)}
    />
    <Tab.Screen
      name={AppScreenName.ADD_POST}
      component={AddPost}
      options={getTabOptions(IconName.PLUS_SQUARE)}
    />
    <Tab.Screen
      name={AppScreenName.PROFILE}
      component={Profile}
      options={getTabOptions(IconName.USER)}
    />
  </Tab.Navigator>
);

export default App;
