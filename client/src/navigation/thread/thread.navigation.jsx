import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IconName, ThreadScreenName } from 'common/enums/enums';
import { Icon } from 'components/components';
import AddPost from 'screens/add-post/add-post';
import Home from 'screens/home/home';
import Profile from 'screens/profile/profile';

const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarActiveTintColor: '#33BBFF',
  tabBarInactiveTintColor: '#D6D6D6',
  tabBarStyle: { minHeight: 60 }
};

const getTabOptions = icon => ({
  tabBarIcon: ({ color }) => <Icon name={icon} color={color} size={26} />
});

const Thread = () => (
  <Tab.Navigator screenOptions={screenOptions}>
    <Tab.Screen
      name={ThreadScreenName.HOME}
      component={Home}
      options={getTabOptions(IconName.HOME)}
    />
    <Tab.Screen
      name={ThreadScreenName.ADD_POST}
      component={AddPost}
      options={getTabOptions(IconName.PLUS_SQUARE)}
    />
    <Tab.Screen
      name={ThreadScreenName.PROFILE}
      component={Profile}
      options={getTabOptions(IconName.USER)}
    />
  </Tab.Navigator>
);

export default Thread;
