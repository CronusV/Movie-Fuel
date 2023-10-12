import { configureStore } from "@reduxjs/toolkit";

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


const userReducer = (state = initialState.user, action: any) => {
  // Define actions to update the user state here
  // For example, you might have actions like 'setUser' to update the user data
  switch (action.type) {
    case 'user/setUser':

      return { ...state, ...action.payload };
    // Add more actions as needed
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: {
    user: userReducer, // Add more reducers as needed
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
