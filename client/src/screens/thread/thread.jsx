import * as React from 'react';
import {
  HomeScreenName,
  IconName,
  NotificationMessage,
  TextVariant
} from 'common/enums/enums';
import {
  Post,
  FlatList,
  Icon,
  Switch,
  Text,
  View
} from 'components/components';
import { AppColor } from 'config/config';
import { sharePost } from 'helpers/helpers';
import {
  useCallback,
  useDispatch,
  useEffect,
  useNavigation,
  useRef,
  useSelector,
  useState
} from 'hooks/hooks';
import { threadActionCreator } from 'store/actions';
import { notification as notificationService } from 'services/services';
import styles from './styles';

const postsFilter = {
  userId: undefined,
  from: 0,
  count: 10
};

const ExpandedPost = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { posts, hasMorePosts, userId } = useSelector(state => ({
    posts: state.posts.posts,
    hasMorePosts: state.posts.hasMorePosts,
    userId: state.profile.user?.id
  }));
  const [showOwnPosts, setShowOwnPosts] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const isFlatListReady = useRef(false); // to avoid firing onEndReached on load on IOS

  const handlePostLike = useCallback(
    id => dispatch(threadActionCreator.likePost(id)),
    [dispatch]
  );

  const handlePostExpand = useCallback(
    id => {
      dispatch(threadActionCreator.loadExpandedPost(id));
      navigation.navigate(HomeScreenName.EXPANDED_POST);
    },
    [dispatch, navigation]
  );

  const handlePostShare = useCallback(({ body, image }) => {
    sharePost({ body, image }).catch(() => {
      notificationService.error(NotificationMessage.OPERATION_FAILED);
    });
  }, []);

  const handlePostsLoad = useCallback(
    filtersPayload => dispatch(threadActionCreator.loadPosts(filtersPayload)),
    [dispatch]
  );

  const handleMorePostsLoad = filtersPayload => {
    setIsLoading(true);
    dispatch(threadActionCreator.loadMorePosts(filtersPayload))
      .unwrap()
      .finally(() => {
        setIsLoading(false);
      });
  };

  const getMorePosts = () => {
    if (isFlatListReady.current && hasMorePosts && !isLoading) {
      handleMorePostsLoad({ ...postsFilter });
      postsFilter.from += postsFilter.count;
    }
  };

  const toggleShowOwnPosts = () => {
    setShowOwnPosts(!showOwnPosts);
    postsFilter.userId = showOwnPosts ? undefined : userId;
    postsFilter.from = 0;
    setIsLoading(true);
    handlePostsLoad({ ...postsFilter })
      .unwrap()
      .finally(() => setIsLoading(false));
    postsFilter.from += postsFilter.count;
  };

  const handleScroll = () => {
    isFlatListReady.current = true;
  };

  useEffect(() => {
    postsFilter.from = 0;

    setIsLoading(true);
    const request = handlePostsLoad({ ...postsFilter });
    request.unwrap().finally(() => setIsLoading(false));

    postsFilter.from += postsFilter.count;

    return () => request.abort();
  }, [handlePostsLoad, setIsLoading]);

  return (
    <FlatList
      bounces={false}
      data={posts}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={(
        <>
          <View style={styles.header}>
            <Icon name={IconName.CAT} size={24} color={AppColor.HEADLINE} />
            <Text variant={TextVariant.HEADLINE} style={styles.logoText}>
              Thread
            </Text>
          </View>
          <View style={styles.filter}>
            <Switch
              value={showOwnPosts}
              label="Show only my posts"
              onToggleValue={toggleShowOwnPosts}
            />
          </View>
        </>
      )}
      onEndReachedThreshold={0.1}
      onEndReached={getMorePosts}
      onScroll={handleScroll}
      renderItem={({ item: post }) => (
        <Post
          post={post}
          onPostLike={handlePostLike}
          onPostShare={handlePostShare}
          onPostExpand={handlePostExpand}
        />
      )}
    />
  );
};

export default ExpandedPost;
