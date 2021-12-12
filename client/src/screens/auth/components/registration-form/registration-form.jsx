import * as React from 'react';
import PropTypes from 'prop-types';
import { AuthFormType, IconName, TextVariant } from 'common/enums/enums';
import { useNavigation, useState } from 'hooks/hooks';
import { Button, Input, Stack, Text, View } from 'components/common/common';
import styles from './styles';

const RegistrationForm = ({ onRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const handleRegisterPress = async () => {
    setIsLoading(true);
    onRegister({ email, password, username })
      .unwrap()
      .catch(() => setIsLoading(false));
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
          isDisabled={isLoading}
          setValue={setUsername}
        />
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
          title="Sign Up"
          isLoading={isLoading}
          onPress={handleRegisterPress}
        />
      </Stack>
      <View style={styles.message}>
        <Text>Already have an account? </Text>
        <Text variant={TextVariant.LINK} onPress={handleLoginPress}>
          Login
        </Text>
      </View>
    </View>
  );
};

RegistrationForm.propTypes = {
  onRegister: PropTypes.func.isRequired
};

export default RegistrationForm;
