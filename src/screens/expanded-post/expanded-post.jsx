import * as React from 'react';
import { Post, FlatList, Spinner } from 'components/components';
import { useCallback, useDispatch, useSelector } from 'hooks/hooks';
import { threadActionCreator } from 'store/actions';
import { AddComment, Comment } from './components/components';
import { getSortedComments } from './helpers/helpers';
import { styles } from './styles';

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

  if (!post) {
    return <Spinner isOverflow />;
  }

  return (
    <FlatList
      bounces={false}
      data={sortedComments}
      keyExtractor={({ id }) => id}
      ListHeaderComponentStyle={styles.header}
      contentContainerStyle={styles.container}
      ListHeaderComponent={(
        <>
          <Post post={post} onPostLike={handlePostLike} />
          <AddComment postId={post.id} onCommentAdd={handleCommentAdd} />
        </>
      )}
      renderItem={({ item: comment }) => <Comment comment={comment} />}
    />
  );
};

export { ExpandedPost };
