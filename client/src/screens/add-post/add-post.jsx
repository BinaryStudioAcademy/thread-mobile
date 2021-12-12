import * as React from 'react';
import { TextInput } from 'react-native';
import {
  ButtonVariant,
  HomeScreenName,
  IconName,
  NotificationMessage,
  TextVariant
} from 'common/enums/enums';
import {
  Button,
  Image,
  SafeAreaView,
  Text,
  View
} from 'components/common/common';
import { AppColor } from 'config/config';
import { pickImage } from 'helpers/helpers';
import { useDispatch, useNavigation, useState } from 'hooks/hooks';
import {
  image as imageService,
  notification as notificationService
} from 'services/services';
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

  const handleUploadFile = async () => {
    setIsUploading(true);

    try {
      const data = await pickImage();
      if (!data) {
        return;
      }

      const { id, link } = await imageService.uploadImage(data);
      setImage({ id, link });
    } catch {
      notificationService.error(NotificationMessage.OPERATION_FAILED);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.screen}>
        <Text variant={TextVariant.HEADLINE}>Add Post</Text>
        <TextInput
          multiline
          value={body}
          placeholder="Type something here..."
          placeholderTextColor={AppColor.PLACEHOLDER}
          numberOfLines={10}
          style={styles.input}
          onChangeText={setBody}
        />
        <View style={styles.buttonWrapper}>
          <Button
            title="Attach image"
            variant={ButtonVariant.TEXT}
            icon={IconName.PLUS_SQUARE}
            isLoading={isUploading}
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
    </SafeAreaView>
  );
};

export default AddPost;
