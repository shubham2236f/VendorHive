
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData : null,
    regStatus : JSON.parse(localStorage.getItem('regStatus')) || false,
    searchKey : null,
}

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers:{
        login : (state,action)=>{
            state.status = true,
            state.userData = action.payload.userData
        },
        logout : (state)=>{
            state.status = false,
            state.userData = null
        },
        register : (state,action)=>{
            state.status = true,
           state.regStatus = action.payload.regStatus
           localStorage.setItem('regStatus', JSON.stringify(state.regStatus));
        },
        search : (state,action)=>{
            console.log('Action received in reducer:', action),
            state.status = true,
            state.searchKey = action.payload.searchKey
        }
    }
});

export const {login,logout,register,search} = authSlice.actions;

export default authSlice.reducer;