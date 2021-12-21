import * as React from 'react';
import {
  createStackNavigator,
  TransitionPresets
} from '@react-navigation/stack';
import { AuthFormType, RootScreenName } from 'common/enums/enums';
import { Spinner } from 'components/components';
import { useDispatch, useEffect, useSelector, useState } from 'hooks/hooks';
import Auth from 'screens/auth/auth';
import { profileActionCreator } from 'store/actions';
import App from './app/app.navigation';

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
  ...TransitionPresets.ScaleFromCenterAndroid
};

const RootNavigation = () => {
  const { user } = useSelector(state => ({
    user: state.profile.user
  }));
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const hasUser = Boolean(user);

  useEffect(() => {
    setIsLoading(true);
    dispatch(profileActionCreator.loadCurrentUser())
      .unwrap()
      .finally(() => {
        setIsLoading(false);
      });
  }, [dispatch, setIsLoading]);

  if (!hasUser && isLoading) {
    return <Spinner isOverflow />;
  }

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      {hasUser ? (
        <Stack.Screen name={RootScreenName.APP} component={App} />
      ) : (
        <Stack.Screen
          name={RootScreenName.AUTH}
          component={Auth}
          initialParams={{ formType: AuthFormType.LOGIN }}
        />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigation;
