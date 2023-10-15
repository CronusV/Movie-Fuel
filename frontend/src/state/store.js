"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var userSlice_1 = require("./userSlice");
var guestSlice_1 = require("./guestSlice");
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        user: userSlice_1.default,
        guest: guestSlice_1.default,
    },
});
