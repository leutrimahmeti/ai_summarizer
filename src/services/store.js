/* eslint-disable no-unused-vars */
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { articleApi } from "./article";

export const store = configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer
  },
  middleware: (customMiddleware) =>
    customMiddleware().concat(articleApi.middleware)
});