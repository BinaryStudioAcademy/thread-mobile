import * as React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';
import { IconName } from 'common/enums/enums';
import { Icon, View } from 'components/common/common';
import styles from './styles';

const Input = ({ value, icon, placeholder, isSecure, setValue }) => (
  <View style={styles.container}>
    <TextInput
      value={value}
      placeholder={placeholder}
      placeholderTextColor="#B6BFC3"
      secureTextEntry={isSecure}
      style={{ ...styles.input, ...(icon && { paddingLeft: 50 }) }}
      onChangeText={setValue}
    />
    {icon && <Icon name={icon} size={20} color="#B6BFC3" style={styles.icon} />}
  </View>
);

Input.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  icon: PropTypes.oneOf(Object.values(IconName)),
  isSecure: PropTypes.bool,
  placeholder: PropTypes.string
};

Input.defaultProps = {
  icon: null,
  placeholder: '',
  isSecure: false
};

export default Input;
