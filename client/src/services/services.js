import AsyncStorage from '@react-native-async-storage/async-storage';
import { Auth } from './auth/auth.service';
import { Comment } from './comment/comment.service';
import { Http } from './http/http.service';
import { Image } from './image/image.service';
import { Notification } from './notification/notification.service';
import { Post } from './post/post.service';
import { Storage } from './storage/storage.service';

const storage = new Storage({
  storage: AsyncStorage
});

const http = new Http({
  storage
});

const auth = new Auth({
  http
});

const comment = new Comment({
  http
});

const post = new Post({
  http
});

const image = new Image({
  http
});

const notification = new Notification();

export { http, storage, auth, comment, post, image, notification };
