import { createAsyncThunk } from '@reduxjs/toolkit';
import { HttpError } from 'exceptions/exceptions';
import { HttpCode, StorageKey, ExceptionMessage } from 'common/enums/enums';

import { ActionType } from './common';

const login = createAsyncThunk(ActionType.LOG_IN, async (request, { extra: { services } }) => {
  const { user, token } = await services.auth.login(request);

  await services.storage.setItem(StorageKey.TOKEN, token);

  return user;
});

const register = createAsyncThunk(ActionType.REGISTER, async (request, { extra: { services } }) => {
  const { user, token } = await services.auth.registration(request);

  await services.storage.setItem(StorageKey.TOKEN, token);

  return user;
});

const logout = createAsyncThunk(ActionType.LOG_OUT, async (_request, { extra: { services } }) => {
  await services.storage.removeItem(StorageKey.TOKEN);

  return null;
});

const loadCurrentUser = createAsyncThunk(
  ActionType.LOG_IN,
  async (_request, { dispatch, rejectWithValue, extra: { services } }) => {
    try {
      const token = await services.storage.getItem(StorageKey.TOKEN);

      if (!token) {
        return null;
      }

      return await services.auth.getCurrentUser();
    } catch (err) {
      const isHttpError = err instanceof HttpError;

      if (isHttpError && err.status === HttpCode.UNAUTHORIZED) {
        dispatch(logout());
      }

      return rejectWithValue(err?.message ?? ExceptionMessage.UNKNOWN_ERROR);
    }
  }
);

export { login, register, logout, loadCurrentUser };
