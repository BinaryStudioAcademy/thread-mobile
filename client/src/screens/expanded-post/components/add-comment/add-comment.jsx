import * as React from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { IconName } from 'common/enums/enums';
import { Icon, View } from 'components/common/common';
import { useState } from 'hooks/hooks';
import styles from './styles';

const AddComment = ({ onCommentAdd }) => {
  const [body, setBody] = useState('');

  const handleAddComment = async () => {
    if (!body) {
      return;
    }
    await onCommentAdd(body);
    setBody('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={body}
        placeholder="Type here..."
        style={styles.input}
        onChangeText={setBody}
      />
      <Icon
        name={IconName.PAPER_PLANE}
        size={22}
        color={body ? '#33BBFF' : '#B6BFC3'}
        onPress={body ? handleAddComment : null}
      />
    </View>
  );
};

AddComment.propTypes = {
  onCommentAdd: PropTypes.func.isRequired
};

export default AddComment;
