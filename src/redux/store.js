import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import miscReducer from "./slice/miscSlice";
import blogReducer from "./slice/blogSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { miscApi } from "./misc/miscApi";
import { vacanciesApi } from "./services/vacanciesApi";
import { applyVacancy } from "./misc/vacancyApplyApi";
import { courseApply } from "./misc/courseApplyApi";
import { settingsApi } from "./services/settingsApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    misc: miscReducer,
    blogs: blogReducer,
   
    [miscApi.reducerPath]: miscApi.reducer,
    [vacanciesApi.reducerPath]: vacanciesApi.reducer,
    [applyVacancy.reducerPath]: applyVacancy.reducer,
    [courseApply.reducerPath]: courseApply.reducer,
    [settingsApi.reducerPath]: settingsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      miscApi.middleware,
      vacanciesApi.middleware,
      applyVacancy.middleware,
      courseApply.middleware,
      settingsApi.middleware,
    )
});

setupListeners(store.dispatch);
