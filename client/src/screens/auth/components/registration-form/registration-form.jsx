import * as React from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { AuthFormType, IconName, TextVariant } from 'common/enums/enums';
import { Button, Input, Stack, Text, View } from 'components/common/common';
import { useNavigation, useState } from 'hooks/hooks';
import { registration as registrationValidationSchema } from 'validation-schemas/validation-schemas';
import { INITIAL_VALUES } from './constants';
import styles from './styles';

const RegistrationForm = ({ onRegister }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const handleSubmit = values => {
    setIsLoading(true);
    onRegister(values)
      .unwrap()
      .catch(() => setIsLoading(false));
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit: handleRegisterPress
  } = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: registrationValidationSchema,
    onSubmit: handleSubmit
  });

  const handleLoginPress = () => {
    navigation.setParams({
      formType: AuthFormType.LOGIN
    });
  };

  return (
    <View>
      <Stack space={15}>
        <Input
          value={values.username}
          icon={IconName.USER}
          placeholder="johndoe"
          isDisabled={isLoading}
          error={touched.username ? errors.username : ''}
          onChangeText={handleChange('username')}
          onBlur={handleBlur('username')}
        />
        <Input
          value={values.email}
          icon={IconName.ENVELOPE}
          placeholder="johndoe@mail.com"
          isDisabled={isLoading}
          error={touched.email ? errors.email : ''}
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
        />
        <Input
          value={values.password}
          icon={IconName.LOCK}
          placeholder="password"
          isSecure
          isDisabled={isLoading}
          error={touched.password ? errors.password : ''}
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
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
