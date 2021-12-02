import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback
} from 'react-native';
import { IconName } from 'common/enums/enums';
import { Icon, Spinner, Text, View } from 'components/common/common';
import styles from './styles';

const TouchableContainer = Platform.select({
  ios: TouchableHighlight,
  android: TouchableNativeFeedback
});

const Button = ({ title, icon, isLoading, isDisabled, isSolid, onPress }) => {
  const color = isSolid ? '#FFFFFF' : '#33BBFF';
  const backgroundColor = isSolid ? '#33BBFF' : '#FFFFFF';
  const isInactive = isLoading || isDisabled;
  const showIcon = !isLoading && icon;

  return (
    <TouchableContainer disabled={isInactive} onPress={onPress}>
      <View
        style={[
          styles.button,
          { backgroundColor, opacity: isInactive ? 0.6 : 1 }
        ]}
      >
        {isLoading && <Spinner size={22} color={color} />}
        {showIcon && <Icon name={icon} size={22} color={color} />}
        <Text style={[styles.title, { color, marginLeft: icon ? 10 : 0 }]}>
          {title}
        </Text>
      </View>
    </TouchableContainer>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(Object.values(IconName)),
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isSolid: PropTypes.bool,
  onPress: PropTypes.func.isRequired
};

Button.defaultProps = {
  icon: null,
  isLoading: false,
  isDisabled: false,
  isSolid: true
};

export default Button;
