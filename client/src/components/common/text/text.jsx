import * as React from 'react';
import PropTypes from 'prop-types';
import { Text as TextUI } from 'react-native';
import styles from './styles';

const Text = ({ children, onPress, style }) => (
  <TextUI style={[styles.text, style]} onPress={onPress}>
    {children}
  </TextUI>
);

Text.propTypes = {
  children: PropTypes.node.isRequired,
  style: TextUI.propTypes.style,
  onPress: PropTypes.func
};

Text.defaultProps = {
  style: null,
  onPress: null
};

export default Text;
