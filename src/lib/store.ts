import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authApi } from '@/features/auth/api';
import { authReducer } from '@/features/auth/slice';
import { postReducer } from '@/features/post/slice';
import { api } from '@/api';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['api'],
};

const reducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authReducer,
  post: postReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
