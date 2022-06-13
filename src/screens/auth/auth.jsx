import * as React from 'react';
import { useCallback, useDispatch, useRoute } from 'hooks/hooks';
import { AuthFormType, TextVariant } from 'common/enums/enums';
import { Image, Text, View } from 'components/components';
import { profileActionCreator } from 'store/actions';
import { LoginForm, RegistrationForm } from './components/components';
import { styles } from './styles';

const Auth = () => {
  const dispatch = useDispatch();
  const {
    params: { formType }
  } = useRoute();

  const handleLogin = useCallback(
    loginPayload => dispatch(profileActionCreator.login(loginPayload)),
    [dispatch]
  );

  const handleRegister = useCallback(
    registerPayload => dispatch(profileActionCreator.register(registerPayload)),
    [dispatch]
  );

  const getForm = type => {
    switch (type) {
      case AuthFormType.LOGIN: {
        return <LoginForm onLogin={handleLogin} />;
      }
      case AuthFormType.REGISTRATION: {
        return <RegistrationForm onRegister={handleRegister} />;
      }
      default: {
        return null;
      }
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.logoWrapper}>
        <Image
          style={styles.logo}
          accessibilityIgnoresInvertColors
          source={{
            uri: 'https://s1.iconbird.com/ico/2013/8/428/w256h2561377930292cattied.png'
          }}
        />
        <Text variant={TextVariant.HEADLINE}>Thread</Text>
      </View>
      {getForm(formType)}
    </View>
  );
};

export { Auth };
