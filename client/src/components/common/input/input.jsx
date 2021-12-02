import * as React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';
import { IconName } from 'common/enums/enums';
import { Icon, View } from 'components/common/common';
import styles from './styles';

const Input = ({
  value,
  icon,
  placeholder,
  isSecure,
  isDisabled,
  setValue
}) => (
  <View style={styles.container}>
    <TextInput
      value={value}
      editable={!isDisabled}
      placeholder={placeholder}
      placeholderTextColor="#B6BFC3"
      secureTextEntry={isSecure}
      style={[
        styles.input,
        icon ? { paddingLeft: 50 } : {},
        { opacity: isDisabled ? 0.6 : 1 }
      ]}
      onChangeText={setValue}
    />
    {icon && <Icon name={icon} size={20} color="#B6BFC3" style={styles.icon} />}
  </View>
);

Input.propTypes = {
  value: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(Object.values(IconName)),
  isSecure: PropTypes.bool,
  isDisabled: PropTypes.bool,
  placeholder: PropTypes.string,
  setValue: PropTypes.func.isRequired
};

Input.defaultProps = {
  icon: null,
  placeholder: '',
  isSecure: false,
  isDisabled: false
};

export default Input;
