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
import { registration as registrationValidationSchema } from 'validation-schemas/validation-schemas';
import { DEFAULT_REGISTRATION_PAYLOAD } from './constants';
import { styles } from './styles';

const RegistrationForm = ({ onRegister }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const { control, errors, handleSubmit } = useAppForm({
    defaultValues: DEFAULT_REGISTRATION_PAYLOAD,
    validationSchema: registrationValidationSchema
  });

  const handleRegister = values => {
    setIsLoading(true);

    onRegister(values)
      .unwrap()
      .catch(() => {
        // TODO: show error
      })
      .finally(() => {
        setIsLoading(false);
      });
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
          name={UserPayloadKey.USERNAME}
          control={control}
          errors={errors}
          placeholder="johndoe"
          iconName={IconName.USER}
          isDisabled={isLoading}
        />
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
          title="Sign Up"
          isLoading={isLoading}
          onPress={handleSubmit(handleRegister)}
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

export { RegistrationForm };
