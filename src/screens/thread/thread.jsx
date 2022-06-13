import * as React from 'react';
import {
  Post,
  FlatList,
  Icon,
  Text,
  View,
  RefreshControl
} from 'components/components';
import { AppColor } from 'config/config';
import {
  useCallback,
  useDispatch,
  useEffect,
  useNavigation,
  useSelector,
  useState
} from 'hooks/hooks';
import { HomeScreenName, IconName, TextVariant } from 'common/enums/enums';
import { threadActionCreator } from 'store/actions';
import { styles } from './styles';

const postsFilter = {
  userId: undefined,
  from: 0,
  count: 10
};

const Thread = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { posts } = useSelector(state => ({
    posts: state.posts.posts
  }));
  const [isLoading, setIsLoading] = useState(false);

  const handlePostLike = useCallback(
    id => dispatch(threadActionCreator.likePost(id)),
    [dispatch]
  );

  const handlePostExpand = useCallback(
    id => {
      dispatch(threadActionCreator.toggleExpandedPost(id));
      navigation.navigate(HomeScreenName.EXPANDED_POST);
    },
    [dispatch, navigation]
  );

  const handlePostsLoad = useCallback(
    filtersPayload => {
      setIsLoading(true);
      dispatch(threadActionCreator.loadPosts(filtersPayload))
        .unwrap()
        .finally(() => {
          setIsLoading(false);
        });
    },
    [dispatch, setIsLoading]
  );

  const handleRefresh = () => {
    handlePostsLoad({ ...postsFilter });
  };

  useEffect(() => {
    handlePostsLoad({ ...postsFilter });
  }, [handlePostsLoad]);

  return (
    <FlatList
      data={posts}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={(
        <View style={styles.header}>
          <Icon name={IconName.CAT} size={24} color={AppColor.HEADLINE} />
          <Text variant={TextVariant.HEADLINE} style={styles.logoText}>
            Thread
          </Text>
        </View>
      )}
      onEndReachedThreshold={0.1}
      refreshControl={(
        <RefreshControl
          colors={[AppColor.PRIMARY]}
          refreshing={isLoading}
          onRefresh={handleRefresh}
        />
      )}
      renderItem={({ item: post }) => (
        <Post
          post={post}
          onPostLike={handlePostLike}
          onPostExpand={handlePostExpand}
        />
      )}
    />
  );
};

export { Thread };
