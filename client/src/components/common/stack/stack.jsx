import * as React from 'react';
import PropTypes from 'prop-types';
import { View } from 'components/common/common';

const Stack = ({ children, space }) => {
  const content = children.map((child, index) => (
    <React.Fragment key={child.key ?? index}>
      {child}
      {index < children.length - 1 && <View style={{ marginBottom: space }} />}
    </React.Fragment>
  ));

  return content;
};

Stack.propTypes = {
  children: PropTypes.node,
  space: PropTypes.number.isRequired
};

export default Stack;
