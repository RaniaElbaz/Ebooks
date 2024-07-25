import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    initialState: {
        user: null,
        token: null,
    },
    name: "auth",
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
    },
});

export const authData = (state) => state.auth;
export const { setUser, setToken } = authSlice.actions;

export default authSlice.reducer;
