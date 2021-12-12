import { configureStore } from '@reduxjs/toolkit';
import {
  handleError as handleErrorMiddleware,
  socket as socketMiddleware
} from 'middlewares/midlewares';

import * as services from 'services/services';
import { profileReducer, threadReducer } from './root-reducer';

const store = configureStore({
  reducer: {
    profile: profileReducer,
    posts: threadReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    thunk: {
      extraArgument: { services }
    }
  }).concat(handleErrorMiddleware, socketMiddleware)
});

export default store;
