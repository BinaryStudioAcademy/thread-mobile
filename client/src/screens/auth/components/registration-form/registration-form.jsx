import * as React from 'react';
import PropTypes from 'prop-types';
import { AuthFormType, IconName } from 'common/enums/enums';
import { useNavigation, useState } from 'hooks/hooks';
import { Button, Input, Stack, Text, View } from 'components/components';
import styles from './styles';

const RegistrationForm = ({ onRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isLoading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleRegisterPress = async () => {
    if (isLoading) {
      return;
    }
    setLoading(true);
    try {
      await onRegister({ email, password, username });
    } catch {
      setLoading(false);
    }
  };

  const handleLoginPress = () => {
    navigation.setParams({
      formType: AuthFormType.LOGIN
    });
  };

  return (
    <View>
      <Stack space={15}>
        <Input
          value={username}
          icon={IconName.USER}
          placeholder="johndoe"
          setValue={setUsername}
        />
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
        <Button title="Sign Up" onPress={handleRegisterPress} />
      </Stack>
      <Text style={styles.message}>
        {'Already have an account? '}
        <Text style={styles.link} onPress={handleLoginPress}>
          Login
        </Text>
      </Text>
    </View>
  );
};

RegistrationForm.propTypes = {
  onRegister: PropTypes.func.isRequired
};

export default RegistrationForm;
