import * as React from 'react';
import PropTypes from 'prop-types';
import { AuthFormType, IconName } from 'common/enums/enums';
import { useNavigation, useState } from 'hooks/hooks';
import { Button, Input, Stack, Text, View } from 'components/components';
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

    onLogin({ email, password }).catch(() => {
      // TODO: show error
      setIsLoading(false);
    });
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
          setValue={setEmail}
        />
        <Input
          value={password}
          icon={IconName.LOCK}
          placeholder="password"
          isSecure
          setValue={setPassword}
        />
        <Button title="Login" onPress={handleLoginPress} />
      </Stack>
      <Text style={styles.message}>
        {'Don’t have an account? '}
        <Text style={styles.link} onPress={handleSignUpPress}>
          Sign up
        </Text>
      </Text>
    </View>
  );
};

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired
};

export default LoginForm;
