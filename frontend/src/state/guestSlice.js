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
exports.setOtherUser = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var guestSlice = (0, toolkit_1.createSlice)({
    name: 'guest',
    initialState: {
        AboutMe: '',
        UserName: '',
        Email: '',
        favoriteItems: [],
        Favorites: [],
        ProfilePicture: '',
    },
    reducers: {
        setOtherUser: function (state, action) {
            // Define actions to update the user state here
            // For example, you might have actions like 'setUser' to update the user data
            switch (action.type) {
                case 'guest/setOtherUser':
                    return __assign(__assign({}, state), action.payload);
                // Add more actions as needed
                default:
                    return state;
            }
        },
    },
});
exports.setOtherUser = guestSlice.actions.setOtherUser;
exports.default = guestSlice.reducer;
