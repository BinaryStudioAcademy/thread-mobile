import * as React from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { AuthFormType, IconName, TextVariant } from 'common/enums/enums';
import { Button, Input, Stack, Text, View } from 'components/common/common';
import { useNavigation, useState } from 'hooks/hooks';
import { login as loginValidationSchema } from 'validation-schemas/validation-schemas';
import { INITIAL_VALUES } from './constants';
import styles from './styles';

const LoginForm = ({ onLogin }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const handleSubmit = values => {
    setIsLoading(true);
    onLogin(values)
      .unwrap()
      .catch(() => setIsLoading(false));
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit: handleLoginPress
  } = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: loginValidationSchema,
    onSubmit: handleSubmit
  });

  const handleSignUpPress = () => {
    navigation.setParams({
      formType: AuthFormType.REGISTRATION
    });
  };

  return (
    <View>
      <Stack space={15}>
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
