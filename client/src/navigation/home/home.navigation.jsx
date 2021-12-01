import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreenName } from 'common/enums/enums';
import Thread from 'screens/thread/thread';
import ExpandedPost from 'screens/expanded-post/expanded-post';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false
};

const Home = () => (
  <Stack.Navigator screenOptions={screenOptions}>
    <Stack.Screen name={HomeScreenName.THREAD} component={Thread} />
    <Stack.Screen
      name={HomeScreenName.EXPANDED_POST}
      component={ExpandedPost}
    />
  </Stack.Navigator>
);

export default Home;
