import * as React from 'react';
import PropTypes from 'prop-types';
import { View } from 'components/components';

const Stack = ({ children, space, isRow }) => {
  const separatorStyle = {
    marginBottom: isRow ? 0 : space,
    marginLeft: isRow ? space : 0
  };

  if (!Array.isArray(children)) {
    return children;
  }

  return (
    <View style={{ flexDirection: isRow ? 'row' : 'column' }}>
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
  isRow: PropTypes.bool
};

Stack.defaultProps = {
  children: null,
  isRow: false
};

export default Stack;
