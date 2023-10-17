"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectCurrentToken = exports.logOut = exports.setCredentials = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var authSlice = (0, toolkit_1.createSlice)({
    name: "auth",
    initialState: { token: null },
    reducers: {
        setCredentials: function (state, action) {
            var accessToken = action.payload.accessToken;
            state.token = accessToken;
        },
        logOut: function (state) {
            state.token = null;
        },
    },
});
exports.setCredentials = (_a = authSlice.actions, _a.setCredentials);
exports.logOut = _a.logOut;

exports.default = authSlice.reducer;

var selectCurrentToken = function (state) { return state.auth.token; };
exports.selectCurrentToken = selectCurrentToken;
