import * as React from 'react';
import PropTypes from 'prop-types';
import { NotificationType } from 'common/enums/enums';
import { Icon, Text, View } from 'components/common/common';
import theme from './theme';
import styles from './styles';

const Notification = ({ type, text1 }) => {
  const { title, icon, color } = theme[type];

  return (
    <View style={[styles.container, { borderLeftColor: color }]}>
      <Icon name={icon} size={24} color={color} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text>{text1}</Text>
      </View>
    </View>
  );
};

Notification.propTypes = {
  type: PropTypes.oneOf(Object.values(NotificationType)).isRequired,
  text1: PropTypes.string.isRequired
};

export default Notification;
