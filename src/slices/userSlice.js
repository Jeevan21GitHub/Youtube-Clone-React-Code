import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:null,
};

export const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser:(state,action)=>{
            state.user=action.payload;
        },
        logOut:(state,action)=>{
            state.user=null;
        }
    }
})

export const {setUser,logOut}=userSlice.actions;
export const getUser=(state)=>state.userInfo.user;
export default userSlice.reducer;