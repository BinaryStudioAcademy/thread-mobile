import * as React from 'react';
import PropTypes from 'prop-types';
import { ViewPropTypes } from 'react-native';
import IconUI from 'react-native-vector-icons/FontAwesome5';
import { IconName } from 'common/enums/enums';

const Icon = ({ name, size, color, style }) => (
  <IconUI name={name} size={size} color={color} style={style} />
);

Icon.propTypes = {
  name: PropTypes.oneOf(Object.values(IconName)).isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  style: ViewPropTypes.style
};

Icon.defaultProps = {
  size: 20,
  color: '#B6BFC3',
  style: null
};

export default Icon;
