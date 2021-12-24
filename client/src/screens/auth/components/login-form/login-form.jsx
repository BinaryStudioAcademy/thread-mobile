import * as React from 'react';
import PropTypes from 'prop-types';
import {
  AuthFormType,
  IconName,
  TextVariant,
  UserPayloadKey
} from 'common/enums/enums';
import { Button, Input, Stack, Text, View } from 'components/components';
import { useAppForm, useNavigation, useState } from 'hooks/hooks';
import { login as loginValidationSchema } from 'validation-schemas/validation-schemas';
import { DEFAULT_LOGIN_PAYLOAD } from './constants';
import styles from './styles';

const LoginForm = ({ onLogin }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const { control, errors, handleSubmit } = useAppForm({
    defaultValues: DEFAULT_LOGIN_PAYLOAD,
    validationSchema: loginValidationSchema
  });

  const handleLogin = values => {
    setIsLoading(true);

    onLogin(values)
      .unwrap()
      .catch(() => {
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
          name={UserPayloadKey.EMAIL}
          control={control}
          errors={errors}
          placeholder="johndoe@mail.com"
          iconName={IconName.ENVELOPE}
          isDisabled={isLoading}
        />
        <Input
          name={UserPayloadKey.PASSWORD}
          control={control}
          errors={errors}
          placeholder="password"
          iconName={IconName.LOCK}
          isDisabled={isLoading}
          isSecure
        />
        <Button
          title="Login"
          isLoading={isLoading}
          onPress={handleSubmit(handleLogin)}
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
