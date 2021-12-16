import * as React from 'react';
import {
  HomeScreenName,
  IconName,
  NotificationMessage,
  TextVariant
} from 'common/enums/enums';
import { AppColor } from 'config/config';
import { FlatList, Icon, Switch, Text, View } from 'components/common/common';
import { Post } from 'components/components';
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
  const navigator = useNavigation();
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
      navigator.navigate(HomeScreenName.EXPANDED_POST);
    },
    [dispatch]
  );

  const handlePostShare = useCallback(({ body, image }) => {
    sharePost({ body, image }).catch(() => {
      notificationService.error(NotificationMessage.OPERATION_FAILED);
    });
  }, []);

  const handlePostsLoad = useCallback(
    filtersPayload => {
      setIsLoading(true);
      dispatch(threadActionCreator.loadPosts(filtersPayload)).finally(() => {
        setIsLoading(false);
      });
    },
    [dispatch]
  );

  const handleMorePostsLoad = filtersPayload => {
    setIsLoading(true);
    dispatch(threadActionCreator.loadMorePosts(filtersPayload)).finally(() => {
      setIsLoading(false);
    });
  };

  const getMorePosts = () => {
    if (isFlatListReady.current && hasMorePosts && !isLoading) {
      handleMorePostsLoad({ ...postsFilter });
      postsFilter.from += 1;
    }
  };

  const toggleShowOwnPosts = () => {
    setShowOwnPosts(!showOwnPosts);
    postsFilter.userId = showOwnPosts ? undefined : userId;
    postsFilter.from = 0;
    handlePostsLoad({ ...postsFilter });
    postsFilter.from += 1;
  };

  const handleScroll = () => {
    isFlatListReady.current = true;
  };

  useEffect(() => {
    postsFilter.from = 0;
    handlePostsLoad({ ...postsFilter });
    postsFilter.from += 1;
  }, [handlePostsLoad]);

  return (
    <FlatList
      data={posts}
      bounces={false}
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
      onEndReachedThreshold={0.01}
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
