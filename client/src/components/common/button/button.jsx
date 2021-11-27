import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback
} from 'react-native';
import { Text, View } from 'components/common/common';
import styles from './styles';

const TouchableContainer = Platform.select({
  ios: TouchableHighlight,
  android: TouchableNativeFeedback
});

const Button = ({ title, onPress }) => (
  <TouchableContainer onPress={onPress}>
    <View style={styles.button}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </TouchableContainer>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

export default Button;
