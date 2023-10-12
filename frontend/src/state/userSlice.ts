import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        AboutMe: '',
        editedText: '',
        isEditing: false,
        isFavoritesOpen: false,
        UserName: '',
        Email: '',
        favoriteItems: [],
        Favorites: [],
        ProfilePicture: '',
    },
    reducers: {
        setUser: (state, action) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;