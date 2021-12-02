import * as React from 'react';
import { TextInput } from 'react-native';
import { HomeScreenName, IconName } from 'common/enums/enums';
import { Button, Image, Text, View } from 'components/common/common';
import { pickImage } from 'helpers/helpers';
import { useDispatch, useNavigation, useState } from 'hooks/hooks';
import { image as imageService } from 'services/services';
import { threadActionCreator } from 'store/actions';
import styles from './styles';

const AddPost = () => {
  const dispatch = useDispatch();
  const navigator = useNavigation();
  const [body, setBody] = useState('');
  const [image, setImage] = useState(undefined);
  const [isUploading, setIsUploading] = useState(false);

  const handleAddPost = () => {
    if (!body) {
      return;
    }

    dispatch(threadActionCreator.createPost({ imageId: image?.id, body }));
    setBody('');
    setImage(undefined);
    navigator.navigate(HomeScreenName.THREAD);
  };

  const handleUploadFile = () => {
    setIsUploading(true);
    pickImage()
      .then(data => imageService.uploadImage(data))
      .then(({ id, link }) => setImage({ id, link }))
      .catch(() => {
        // TODO: show error
      })
      .finally(() => setIsUploading(false));
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Add Post</Text>
      <TextInput
        multiline
        value={body}
        placeholder="Type something here..."
        numberOfLines={10}
        style={styles.input}
        onChangeText={setBody}
      />
      <View style={styles.buttonWrapper}>
        <Button
          title="Attach image"
          icon={IconName.PLUS_SQUARE}
          isLoading={isUploading}
          isSolid={false}
          onPress={handleUploadFile}
        />
      </View>
      {image?.link && (
        <Image
          style={styles.image}
          accessibilityIgnoresInvertColors
          source={{ uri: image?.link }}
        />
      )}
      <Button
        title="Add"
        isDisabled={!body || isUploading}
        onPress={handleAddPost}
      />
    </View>
  );
};

export default AddPost;
