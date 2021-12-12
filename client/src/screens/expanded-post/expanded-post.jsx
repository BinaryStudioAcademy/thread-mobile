import * as React from 'react';
import { NotificationMessage } from 'common/enums/enums';
import { FlatList, SafeAreaView, Spinner } from 'components/common/common';
import { Post } from 'components/components';
import { sharePost } from 'helpers/helpers';
import { useCallback, useDispatch, useSelector } from 'hooks/hooks';
import { notification as notificationService } from 'services/services';
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
      notificationService.error(NotificationMessage.OPERATION_FAILED);
    });
  }, []);

  if (!post) {
    return <Spinner isOverflow />;
  }

  return (
    <SafeAreaView>
      <FlatList
        data={sortedComments}
        keyExtractor={({ id }) => id}
        ListHeaderComponentStyle={styles.header}
        contentContainerStyle={styles.container}
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
    </SafeAreaView>
  );
};

export default ExpandedPost;
