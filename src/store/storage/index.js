//setup global state so it can be used accros entire apps
import { configureStore } from "@reduxjs/toolkit";
import rootReduer from "../reducers";

//create store
export const store = configureStore({
    reducer: rootReducer
})

