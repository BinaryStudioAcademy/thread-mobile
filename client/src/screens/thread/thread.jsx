import * as React from 'react';
import { HomeScreenName, IconName } from 'common/enums/enums';
import {
  FlatList,
  Icon,
  Post,
  Switch,
  Text,
  View
} from 'components/components';
import {
  useCallback,
  useDispatch,
  useEffect,
  useNavigation,
  useSelector,
  useState
} from 'hooks/hooks';
import { threadActionCreator } from 'store/actions';
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
    <View style={styles.screen}>
      <FlatList
        data={posts}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={(
          <>
            <View style={styles.header}>
              <Icon name={IconName.CAT} size={24} color="#079BE4" />
              <Text style={styles.logoText}>Thread</Text>
            </View>
            <View style={styles.filter}>
              <Switch
                value={showOwnPosts}
                label="show only my posts"
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
            onPostExpand={handlePostExpand}
          />
        )}
      />
    </View>
  );
};

export default ExpandedPost;
