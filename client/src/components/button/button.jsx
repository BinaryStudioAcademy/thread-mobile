import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback
} from 'react-native';
import { ButtonVariant, IconName } from 'common/enums/enums';
import { Icon, Spinner, Text, View } from 'components/components';
import theme from './theme';
import styles from './styles';

const TouchableContainer = Platform.select({
  ios: TouchableHighlight,
  android: TouchableNativeFeedback
});

const Button = ({ title, icon, variant, isLoading, isDisabled, onPress }) => {
  const { color, backgroundColor, underlayColor, padding } = theme[variant];
  const isInactive = isLoading || isDisabled;
  const showIcon = !isLoading && icon;
  const titleMarginLeft = icon || isLoading ? 10 : 0;

  return (
    <View style={styles.container}>
      <TouchableContainer
        underlayColor={underlayColor}
        disabled={isInactive}
        onPress={onPress}
      >
        <View
          style={[
            styles.button,
            { padding, backgroundColor, opacity: isInactive ? 0.6 : 1 }
          ]}
        >
          {isLoading && <Spinner size={22} color={color} />}
          {showIcon && <Icon name={icon} size={22} color={color} />}
          <Text style={[styles.title, { color, marginLeft: titleMarginLeft }]}>
            {title}
          </Text>
        </View>
      </TouchableContainer>
    </View>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(Object.values(IconName)),
  variant: PropTypes.oneOf(Object.values(ButtonVariant)),
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onPress: PropTypes.func.isRequired
};

Button.defaultProps = {
  icon: null,
  variant: ButtonVariant.SOLID,
  isLoading: false,
  isDisabled: false
};

export default Button;
