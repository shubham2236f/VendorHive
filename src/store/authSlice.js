
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData : null,
    regStatus : false,
}

const authSlice = createSlice({
    name : "auth",
    initialState:{
        regStatus: JSON.parse(localStorage.getItem('regStatus')) || false,
    },
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
    }
});

export const {login,logout,register} = authSlice.actions;

export default authSlice.reducer;