"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var userSlice_1 = require("./userSlice");
var guestSlice_1 = require("./guestSlice");
var initialState = {
    user: {
        AboutMe: 'This is my default about me section',
        editedText: '',
        isEditing: false,
        isFavoritesOpen: false,
        UserName: 'david007',
        Email: 'ringo@gmail.com',
        favoriteItems: [],
        Favorites: [],
        ProfilePicture: 'https://static.wikia.nocookie.net/characterprofile/images/c/c8/BotW_Link.png',
    },
};
var initialStateg = {
    guest: {
        AboutMe: 'This is my default about me section',
        editedText: '',
        isEditing: false,
        isFavoritesOpen: false,
        UserName: 'danny007',
        Email: 'ringo@gmail.com',
        favoriteItems: [],
        Favorites: [],
        ProfilePicture: 'https://static.wikia.nocookie.net/characterprofile/images/c/c8/BotW_Link.png',
    },
};
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        user: userSlice_1.default,
        guest: guestSlice_1.default,
    },
});
