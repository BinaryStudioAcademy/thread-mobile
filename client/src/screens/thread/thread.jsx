import * as React from 'react';
import {
  HomeScreenName,
  IconName,
  NotificationMessage,
  TextVariant
} from 'common/enums/enums';
import { AppColor } from 'config/config';
import {
  FlatList,
  Icon,
  SafeAreaView,
  Switch,
  Text,
  View
} from 'components/common/common';
import { Post } from 'components/components';
import { sharePost } from 'helpers/helpers';
import {
  useCallback,
  useDispatch,
  useEffect,
  useNavigation,
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
    userId: state.profile.user.id
  }));
  const [showOwnPosts, setShowOwnPosts] = useState(false);

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

  const handlePostsLoad = filtersPayload => {
    dispatch(threadActionCreator.loadPosts(filtersPayload));
  };

  const handleMorePostsLoad = useCallback(
    filtersPayload => {
      dispatch(threadActionCreator.loadMorePosts(filtersPayload));
    },
    [dispatch]
  );

  const toggleShowOwnPosts = () => {
    setShowOwnPosts(!showOwnPosts);
    postsFilter.userId = showOwnPosts ? undefined : userId;
    postsFilter.from = 0;
    handlePostsLoad({ ...postsFilter });
    postsFilter.from = postsFilter.count; // for the next scroll
  };

  const getMorePosts = useCallback(() => {
    handleMorePostsLoad({ ...postsFilter });
    const { from, count } = postsFilter;
    postsFilter.from = from + count;
  }, [handleMorePostsLoad]);

  const handleEndReached = () => {
    if (hasMorePosts) {
      getMorePosts();
    }
  };

  useEffect(() => {
    getMorePosts();
  }, [getMorePosts]);

  return (
    <SafeAreaView>
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
        onEndReachedThreshold={0}
        onEndReached={handleEndReached}
        renderItem={({ item: post }) => (
          <Post
            post={post}
            onPostLike={handlePostLike}
            onPostShare={handlePostShare}
            onPostExpand={handlePostExpand}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default ExpandedPost;
