import * as React from 'react';
import { Switch as UISwitch } from 'react-native';
import PropTypes from 'prop-types';
import { Text, View } from 'components/common/common';
import styles from './styles';

const Switch = ({ value, label, onToggleValue }) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <UISwitch
      value={value}
      trackColor={{ false: '#a5a5a5', true: '#BDE9FF' }}
      thumbColor={value ? '#33BBFF' : '#e6e6e6'}
      onValueChange={onToggleValue}
    />
  </View>
);

Switch.propTypes = {
  value: PropTypes.bool.isRequired,
  label: PropTypes.string,
  onToggleValue: PropTypes.func.isRequired
};

Switch.defaultProps = {
  label: ''
};

export default Switch;
