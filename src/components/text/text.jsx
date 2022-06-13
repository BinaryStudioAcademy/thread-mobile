import * as React from 'react';
import PropTypes from 'prop-types';
import { Text as TextUI, TouchableOpacity } from 'react-native';
import { TextVariant } from 'common/enums/enums';
import { styles } from './styles';

const Text = ({ children, variant, onPress, style }) => {
  if (onPress) {
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <TextUI style={[styles[variant], style]}>{children}</TextUI>
      </TouchableOpacity>
    );
  }

  return <TextUI style={[styles[variant], style]}>{children}</TextUI>;
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(Object.values(TextVariant)),
  style: TextUI.propTypes.style,
  onPress: PropTypes.func
};

Text.defaultProps = {
  variant: TextVariant.TEXT,
  style: null,
  onPress: null
};

export { Text };
