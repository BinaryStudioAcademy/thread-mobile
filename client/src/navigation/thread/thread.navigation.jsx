import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThreadScreenName } from 'common/enums/enums';
import AddPost from 'screens/add-post/add-post';
import Home from 'screens/home/home';
import Profile from 'screens/profile/profile';

const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false
};

const Thread = () => (
  <Tab.Navigator screenOptions={screenOptions}>
    <Tab.Screen name={ThreadScreenName.HOME} component={Home} />
    <Tab.Screen name={ThreadScreenName.ADD_POST} component={AddPost} />
    <Tab.Screen name={ThreadScreenName.PROFILE} component={Profile} />
  </Tab.Navigator>
);

export default Thread;
