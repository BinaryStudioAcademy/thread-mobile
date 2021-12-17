import { io } from 'socket.io-client';
import { ENV, NotificationMessage, SocketEvent } from 'common/enums/enums';
import { notification as notificationService } from 'services/services';
import { profileActionCreator, threadActionCreator } from 'store/actions';

const socket = ({ getState, dispatch }) => next => {
  const userSocket = io(ENV.SOCKET_SERVER);

  userSocket.on(SocketEvent.LIKE, () => {
    notificationService.info(NotificationMessage.LIKE);
  });

  userSocket.on(SocketEvent.NEW_POST, post => {
    const {
      profile: { user }
    } = getState();

    if (post.userId !== user?.id) {
      dispatch(threadActionCreator.applyPost(post.id));
    }
  });

  return action => {
    switch (action.type) {
      case profileActionCreator.login.fulfilled.toString(): {
        const { payload: user } = action;
        if (user) {
          userSocket.emit(SocketEvent.CREATE_ROOM, user.id);
        }
        break;
      }
      case profileActionCreator.logout.fulfilled.toString(): {
        const {
          profile: { user }
        } = getState();
        if (user) {
          userSocket.emit(SocketEvent.LEAVE_ROOM, user.id);
        }
        break;
      }
      default:
        break;
    }

    next(action);
  };
};

export { socket };
