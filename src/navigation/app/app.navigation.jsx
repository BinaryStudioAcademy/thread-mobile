import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IconName, AppScreenName } from 'common/enums/enums';
import { Icon } from 'components/components';
import { AppColor } from 'config/config';
import { AddPost } from 'screens/add-post/add-post';
import { Profile } from 'screens/profile/profile';
import { Home } from '../home/home.navigation';

const Tab = createBottomTabNavigator();

const screenOptions = {
  animationEnabled: true,
  headerShown: false,
  tabBarShowLabel: false,
  tabBarInactiveTintColor: AppColor.ICON,
  tabBarStyle: { minHeight: 60 }
};

const getTabOptions = icon => ({
  tabBarIcon: ({ focused, color }) => (
    <Icon name={icon} color={color} size={25} style={{ opacity: focused ? 1 : 0.7 }} />
  )
});

const App = () => (
  <Tab.Navigator screenOptions={screenOptions}>
    <Tab.Screen name={AppScreenName.HOME} component={Home} options={getTabOptions(IconName.HOME)} />
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

export { App };
