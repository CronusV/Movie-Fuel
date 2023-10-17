"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiSlice = void 0;
var react_1 = require("@reduxjs/toolkit/query/react");
exports.apiSlice = (0, react_1.createApi)({
    baseQuery: (0, react_1.fetchBaseQuery)({ baseUrl: "http://localhost:4000" }),
    tagTypes: ["User"],
    endpoints: function (builder) { return ({}); },
});
