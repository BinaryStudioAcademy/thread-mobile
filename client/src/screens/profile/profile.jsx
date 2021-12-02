import * as React from 'react';
import { IconName } from 'common/enums/enums';
import { DEFAULT_USER_AVATAR } from 'common/constants/constants';
import { Button, Image, Input, Stack, View } from 'components/common/common';
import { useDispatch, useSelector, useState } from 'hooks/hooks';
import { profileActionCreator } from 'store/actions';
import styles from './styles';

const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => ({
    user: state.profile.user
  }));
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);

  const handleUserLogout = () => dispatch(profileActionCreator.logout());

  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <Image
          style={styles.avatar}
          accessibilityIgnoresInvertColors
          source={{ uri: user.image?.link ?? DEFAULT_USER_AVATAR }}
        />
        <Stack space={15} style={styles.stack}>
          <Input
            value={username}
            icon={IconName.USER}
            setValue={setUsername}
            isDisabled
          />
          <Input
            value={email}
            icon={IconName.ENVELOPE}
            setValue={setEmail}
            isDisabled
          />
        </Stack>
        <Button title="Logout" onPress={handleUserLogout} />
      </View>
    </View>
  );
};

export default Profile;
