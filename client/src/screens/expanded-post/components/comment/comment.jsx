import * as React from 'react';
import { TextVariant } from 'common/enums/enums';
import { DEFAULT_USER_AVATAR } from 'common/constants/constants';
import { commentType } from 'common/prop-types/prop-types';
import { Image, Text, View } from 'components/common/common';
import { getFromNowTime } from 'helpers/helpers';
import styles from './styles';

const Comment = ({ comment: { body, createdAt, user } }) => (
  <View style={styles.container}>
    <Image
      style={styles.avatar}
      accessibilityIgnoresInvertColors
      source={{ uri: user.image?.link ?? DEFAULT_USER_AVATAR }}
    />
    <View style={styles.content}>
      <View style={styles.header}>
        <Text variant={TextVariant.TITLE}>{user.username}</Text>
        <Text variant={TextVariant.SUBTITLE}>
          {' '}
          •
          {' '}
          {getFromNowTime(createdAt)}
        </Text>
      </View>
      <Text style={styles.body}>{body}</Text>
    </View>
  </View>
);

Comment.propTypes = {
  comment: commentType.isRequired
};

export default Comment;
