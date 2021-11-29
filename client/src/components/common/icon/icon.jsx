import * as React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, ViewPropTypes } from 'react-native';
import IconUI from 'react-native-vector-icons/FontAwesome5';
import { IconName } from 'common/enums/enums';
import { Text } from 'components/common/common';
import styles from './styles';

const Icon = ({ name, size, color, label, style, onPress }) => (
  <TouchableOpacity activeOpacity={0.7} disabled={!onPress} style={styles.container} onPress={onPress}>
    <IconUI name={name} size={size} color={color} style={style} />
    {label && <Text style={[styles.label, { fontSize: size * 0.85, color }]}>{label}</Text>}
  </TouchableOpacity>
);

Icon.propTypes = {
  name: PropTypes.oneOf(Object.values(IconName)).isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  label: PropTypes.string,
  style: ViewPropTypes.style,
  onPress: PropTypes.func
};

Icon.defaultProps = {
  size: 20,
  color: '#B6BFC3',
  label: null,
  style: null,
  onPress: null
};

export default Icon;
