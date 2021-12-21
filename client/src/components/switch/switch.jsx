import * as React from 'react';
import { Switch as UISwitch } from 'react-native';
import PropTypes from 'prop-types';
import { HUE } from 'common/constants/constants';
import { Text, View } from 'components/components';
import { AppColor } from 'config/config';
import styles from './styles';

const Switch = ({ value, label, onToggleValue }) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <UISwitch
      value={value}
      style={styles.switch}
      ios_backgroundColor={`hsl(${HUE}, 10%, 70%)`}
      trackColor={{
        false: `hsl(${HUE}, 10%, 65%)`,
        true: AppColor.PRIMARY_LIGHT
      }}
      thumbColor={value ? AppColor.PRIMARY : `hsl(${HUE}, 10%, 85%)`}
      onValueChange={onToggleValue}
    />
  </View>
);

Switch.propTypes = {
  value: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onToggleValue: PropTypes.func.isRequired
};

export default Switch;
