import * as React from 'react';
import { ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import { View } from 'components/common/common';

const Stack = ({ children, space, isRow, style }) => {
  const separatorStyle = {
    marginBottom: isRow ? 0 : space,
    marginLeft: isRow ? space : 0
  };

  if (!Array.isArray(children)) {
    return children;
  }

  return (
    <View style={[{ flexDirection: isRow ? 'row' : 'column' }, style]}>
      {children.map((child, index) => (
        <React.Fragment key={child.key ?? index}>
          {child}
          {index < children.length - 1 && <View style={separatorStyle} />}
        </React.Fragment>
      ))}
    </View>
  );
};

Stack.propTypes = {
  children: PropTypes.node,
  space: PropTypes.number.isRequired,
  isRow: PropTypes.bool,
  style: ViewPropTypes.style
};

Stack.defaultProps = {
  children: null,
  isRow: false,
  style: null
};

export default Stack;
