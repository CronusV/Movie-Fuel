"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var userSlice_1 = require("./userSlice");
var guestSlice_1 = require("./guestSlice");
var apiSlice_1 = require("./api/apiSlice");
var authSlice_1 = require("./auth/authSlice");
exports.store = (0, toolkit_1.configureStore)({
    reducer: (_a = {},
        _a[apiSlice_1.apiSlice.reducerPath] = apiSlice_1.apiSlice.reducer,
        _a.auth = authSlice_1.default,
        _a.user = userSlice_1.default,
        _a.guest = guestSlice_1.default,
        _a),
    middleware: function (getDefaultMiddleware) {
        return getDefaultMiddleware().concat(apiSlice_1.apiSlice.middleware);
    },
    devTools: true,
});
