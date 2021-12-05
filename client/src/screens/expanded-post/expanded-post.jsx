import * as React from 'react';
import { FlatList, Post, Spinner, View } from 'components/components';
import { sharePost } from 'helpers/helpers';
import { useCallback, useDispatch, useSelector } from 'hooks/hooks';
import { threadActionCreator } from 'store/actions';
import { AddComment, Comment } from './components/components';
import { getSortedComments } from './helpers/helpers';
import styles from './styles';

const ExpandedPost = () => {
  const dispatch = useDispatch();

  const { post } = useSelector(state => ({
    post: state.posts.expandedPost
  }));

  const sortedComments = getSortedComments(post?.comments ?? []);

  const handlePostLike = useCallback(
    id => dispatch(threadActionCreator.likePost(id)),
    [dispatch]
  );

  const handleCommentAdd = useCallback(
    commentPayload => dispatch(threadActionCreator.addComment(commentPayload)),
    [dispatch]
  );

  const handlePostShare = useCallback(({ body, image }) => {
    sharePost({ body, image }).catch(() => {
      // TODO: show error
    });
  }, []);

  if (!post) {
    return <Spinner isOverflow />;
  }

  return (
    <View style={styles.screen}>
      <FlatList
        data={sortedComments}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={(
          <>
            <Post
              post={post}
              onPostLike={handlePostLike}
              onPostShare={handlePostShare}
            />
            <AddComment postId={post.id} onCommentAdd={handleCommentAdd} />
          </>
        )}
        renderItem={({ item: comment }) => <Comment comment={comment} />}
      />
    </View>
  );
};

export default ExpandedPost;
