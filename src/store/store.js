import { appReducer } from "../reducer/appReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: appReducer
});

