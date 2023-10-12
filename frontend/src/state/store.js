"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
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
var userReducer = function (state, action) {
    console.log('here in reducer', action);
    if (state === void 0) { state = initialState.user; }
    // Define actions to update the user state here
    // For example, you might have actions like 'setUser' to update the user data
    switch (action.type) {
        case 'user/setUser':
            console.log('here in setUser');
            return __assign(__assign({}, state), action.payload);
        // Add more actions as needed
        default:
            return state;
    }
};
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        user: userReducer, // Add more reducers as needed
    },
});
