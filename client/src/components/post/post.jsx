import * as React from 'react';
import PropTypes from 'prop-types';
import { DEFAULT_USER_AVATAR } from 'common/constants/constants';
import { IconName } from 'common/enums/enums';
import { postType } from 'common/prop-types/prop-types';
import { Icon, Image, Stack, Text, View } from 'components/common/common';
import { getFromNowTime } from 'helpers/helpers';
import styles from './styles';

const Post = ({ post, onPostLike, onPostExpand }) => {
  const {
    id,
    image,
    body,
    user,
    likeCount,
    dislikeCount,
    commentCount,
    createdAt
  } = post;
  const date = getFromNowTime(createdAt);

  const handlePostLike = () => onPostLike(id);
  const handlePostExpand = () => onPostExpand(id);

  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        accessibilityIgnoresInvertColors
        source={{ uri: user.image?.link ?? DEFAULT_USER_AVATAR }}
      />
      <View style={styles.content}>
        <Text>
          <Text style={styles.username}>{user.username}</Text>
          <Text style={styles.date}>{` • ${date}`}</Text>
        </Text>
        {image && (
          <Image
            style={styles.image}
            accessibilityIgnoresInvertColors
            source={{ uri: image.link ?? DEFAULT_USER_AVATAR }}
          />
        )}
        <Text style={styles.body}>{body}</Text>
        <View style={styles.footer}>
          <Stack space={24} isRow>
            <Icon
              name={IconName.THUMBS_UP}
              size={16}
              label={String(likeCount)}
              onPress={handlePostLike}
            />
            <Icon
              name={IconName.THUMBS_DOWN}
              size={16}
              label={String(dislikeCount)}
            />
            <Icon
              name={IconName.COMMENT}
              size={16}
              label={String(commentCount)}
              onPress={onPostExpand ? handlePostExpand : null}
            />
          </Stack>
          <Icon name={IconName.SHARE_ALT} size={16} />
        </View>
      </View>
    </View>
  );
};

Post.propTypes = {
  post: postType.isRequired,
  onPostLike: PropTypes.func.isRequired,
  onPostExpand: PropTypes.func
};

Post.defaultProps = {
  onPostExpand: null
};

export default Post;
