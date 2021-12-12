import * as React from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { IconName } from 'common/enums/enums';
import { Icon, View } from 'components/common/common';
import { AppColor } from 'config/config';
import { useState } from 'hooks/hooks';
import styles from './styles';

const AddComment = ({ postId, onCommentAdd }) => {
  const [body, setBody] = useState('');

  const handleAddComment = async () => {
    if (!body) {
      return;
    }
    await onCommentAdd({ body, postId });
    setBody('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={body}
        placeholder="Type your comment..."
        placeholderTextColor={AppColor.PLACEHOLDER}
        style={styles.input}
        onChangeText={setBody}
      />
      <Icon
        name={IconName.PAPER_PLANE}
        size={22}
        color={body ? AppColor.PRIMARY : AppColor.ICON}
        onPress={body ? handleAddComment : null}
      />
    </View>
  );
};

AddComment.propTypes = {
  postId: PropTypes.number.isRequired,
  onCommentAdd: PropTypes.func.isRequired
};

export default AddComment;
