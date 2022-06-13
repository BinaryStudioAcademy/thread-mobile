import * as React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { HomeScreenName } from 'common/enums/enums';
import { Thread } from 'screens/thread/thread';
import { ExpandedPost } from 'screens/expanded-post/expanded-post';

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
  ...TransitionPresets.ScaleFromCenterAndroid
};

const Home = () => (
  <Stack.Navigator screenOptions={screenOptions}>
    <Stack.Screen name={HomeScreenName.THREAD} component={Thread} />
    <Stack.Screen name={HomeScreenName.EXPANDED_POST} component={ExpandedPost} />
  </Stack.Navigator>
);

export { Home };
