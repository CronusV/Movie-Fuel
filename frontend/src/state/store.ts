import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import guestReducer from './guestSlice';
import { apiSlice } from "./api/apiSlice";

import authReducer from "./auth/authSlice";




export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    user: userReducer, // Add more reducers as needed
    guest: guestReducer,
    // Reducers go here
    // Ex.
    // reviews: postsReducer,
    // comments: commentsReducer,
    // users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
