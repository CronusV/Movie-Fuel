import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import guestReducer from './guestSlice';
const initialState = {
  user: {
    AboutMe: 'This is my default about me section',
    editedText: '',
    isEditing: false,
    isFavoritesOpen: false,
    UserName: 'david007',
    Email: 'ringo@gmail.com',
    favoriteItems: [] as string[],
    Favorites: [],
    ProfilePicture: 'https://static.wikia.nocookie.net/characterprofile/images/c/c8/BotW_Link.png',
  },
};
const initialStateg = {
  guest: {
    AboutMe: 'This is my default about me section',
    editedText: '',
    isEditing: false,
    isFavoritesOpen: false,
    UserName: 'danny007',
    Email: 'ringo@gmail.com',
    favoriteItems: [] as string[],
    Favorites: [],
    ProfilePicture: 'https://static.wikia.nocookie.net/characterprofile/images/c/c8/BotW_Link.png',
  },
};


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
