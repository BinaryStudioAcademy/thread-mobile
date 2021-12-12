import * as React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';
import { IconName } from 'common/enums/enums';
import { Icon, Text, View } from 'components/common/common';
import { AppColor } from 'config/config';
import styles from './styles';

const Input = ({
  value,
  icon,
  placeholder,
  error,
  isSecure,
  isDisabled,
  onChangeText,
  onBlur
}) => (
  <View>
    <View style={styles.inputWrapper}>
      <TextInput
        value={value}
        editable={!isDisabled}
        placeholder={placeholder}
        placeholderTextColor={AppColor.PLACEHOLDER}
        secureTextEntry={isSecure}
        autoCorrect={false}
        style={[
          styles.input,
          icon ? { paddingLeft: 50 } : {},
          { opacity: isDisabled ? 0.5 : 1 }
        ]}
        onChangeText={onChangeText}
        onBlur={onBlur}
      />
      {icon && <Icon name={icon} size={20} style={styles.icon} />}
    </View>
    {Boolean(error) && (
      <View style={styles.error}>
        <Icon
          name={IconName.EXCLAMATION_TRIANGLE}
          size={14}
          color={AppColor.ERROR}
        />
        <Text style={styles.errorMessage}>{error}</Text>
      </View>
    )}
  </View>
);

Input.propTypes = {
  value: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(Object.values(IconName)),
  error: PropTypes.string,
  isSecure: PropTypes.bool,
  isDisabled: PropTypes.bool,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  onBlur: PropTypes.func
};

Input.defaultProps = {
  icon: null,
  placeholder: '',
  error: '',
  isSecure: false,
  isDisabled: false,
  onChangeText: null,
  onBlur: null
};

export default Input;
