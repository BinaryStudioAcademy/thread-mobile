import * as React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';
import { View } from 'components/common/common';
import styles from './styles';

const Spinner = ({ isOverflow }) => {
  if (isOverflow) {
    return (
      <View style={styles.overflowContainer}>
        <ActivityIndicator size={45} color="#33BBFF" />
      </View>
    );
  }

  return <ActivityIndicator size={30} color="#33BBFF" />;
};

Spinner.propTypes = {
  isOverflow: PropTypes.bool
};

Spinner.defaultProps = {
  isOverflow: false
};

export default Spinner;
