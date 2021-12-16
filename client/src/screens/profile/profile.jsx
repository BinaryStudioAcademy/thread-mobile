import * as React from 'react';
import { IconName } from 'common/enums/enums';
import { DEFAULT_USER_AVATAR } from 'common/constants/constants';
import { Button, Image, Input, Stack, View } from 'components/common/common';
import { useDispatch, useSelector } from 'hooks/hooks';
import { profileActionCreator } from 'store/actions';
import styles from './styles';

const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => ({
    user: state.profile.user
  }));

  const handleUserLogout = () => dispatch(profileActionCreator.logout());

  if (!user) {
    return <></>;
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
          <Input value={user.username} icon={IconName.USER} isDisabled />
          <Input value={user.email} icon={IconName.ENVELOPE} isDisabled />
          <Button title="Logout" onPress={handleUserLogout} />
        </Stack>
      </View>
    </View>
  );
};

export default Profile;
