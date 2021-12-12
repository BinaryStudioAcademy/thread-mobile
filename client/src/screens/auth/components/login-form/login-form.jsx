import * as React from 'react';
import PropTypes from 'prop-types';
import { AuthFormType, IconName, TextVariant } from 'common/enums/enums';
import { useNavigation, useState } from 'hooks/hooks';
import { Button, Input, Stack, Text, View } from 'components/common/common';
import styles from './styles';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const handleLoginPress = () => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);

    onLogin({ email, password })
      .unwrap()
      .catch(() => setIsLoading(false));
  };

  const handleSignUpPress = () => {
    navigation.setParams({
      formType: AuthFormType.REGISTRATION
    });
  };

  return (
    <View>
      <Stack space={15}>
        <Input
          value={email}
          icon={IconName.ENVELOPE}
          placeholder="johndoe@mail.com"
          isDisabled={isLoading}
          setValue={setEmail}
        />
        <Input
          value={password}
          icon={IconName.LOCK}
          placeholder="password"
          isSecure
          isDisabled={isLoading}
          setValue={setPassword}
        />
        <Button
          title="Login"
          isLoading={isLoading}
          onPress={handleLoginPress}
        />
      </Stack>
      <View style={styles.message}>
        <Text>Don’t have an account? </Text>
        <Text variant={TextVariant.LINK} onPress={handleSignUpPress}>
          Sign up
        </Text>
      </View>
    </View>
  );
};

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired
};

export default LoginForm;
