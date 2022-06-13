import * as React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';
import { View } from 'components/components';
import { AppColor } from 'config/config';
import { styles } from './styles';

const Spinner = ({ size, color, isOverflow }) => {
  if (isOverflow) {
    return (
      <View style={styles.overflowContainer}>
        <ActivityIndicator size={size ?? 45} color={color} />
      </View>
    );
  }

  return <ActivityIndicator size={size ?? 30} color={color} />;
};

Spinner.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  isOverflow: PropTypes.bool
};

Spinner.defaultProps = {
  size: null,
  color: AppColor.PRIMARY,
  isOverflow: false
};

export { Spinner };
