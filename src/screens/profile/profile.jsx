import * as React from 'react';
import { IconName, UserPayloadKey } from 'common/enums/enums';
import { DEFAULT_USER_AVATAR } from 'common/constants/constants';
import { Button, Image, Input, Stack, View } from 'components/components';
import { useAppForm, useDispatch, useSelector } from 'hooks/hooks';
import { profileActionCreator } from 'store/actions';
import { styles } from './styles';

const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => ({
    user: state.profile.user
  }));
  const { control, errors } = useAppForm({
    defaultValues: {
      [UserPayloadKey.USERNAME]: user?.username,
      [UserPayloadKey.EMAIL]: user?.email
    }
  });

  const handleUserLogout = () => dispatch(profileActionCreator.logout());

  if (!user) {
    return null;
  }

  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <Image
          style={styles.avatar}
          accessibilityIgnoresInvertColors
          source={{ uri: user.image?.link ?? DEFAULT_USER_AVATAR }}
        />
        <Stack space={15}>
          <Input
            name={UserPayloadKey.USERNAME}
            control={control}
            errors={errors}
            iconName={IconName.USER}
            isDisabled
          />
          <Input
            name={UserPayloadKey.EMAIL}
            control={control}
            errors={errors}
            iconName={IconName.ENVELOPE}
            isDisabled
          />
          <Button title="Logout" onPress={handleUserLogout} />
        </Stack>
      </View>
    </View>
  );
};

export { Profile };
