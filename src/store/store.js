import { appReducer } from "../reducer/appReducer";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { modalReducer } from "../reducer/modalReducer";

export const store = configureStore({
    reducer: combineReducers({
        app: appReducer,
        modal: modalReducer
    })
});

