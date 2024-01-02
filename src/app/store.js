import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";

const reducer=combineReducers({
    userInfo:userReducer,
})

export const store=configureStore({
    devTools:true,
    reducer,
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware({serializableCheck:false}),
    
})