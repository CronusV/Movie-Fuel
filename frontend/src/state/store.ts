import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import guestReducer from './guestSlice';



export const store = configureStore({
  reducer: {
    user: userReducer, // Add more reducers as needed
    guest: guestReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
