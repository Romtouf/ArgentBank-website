import { createSlice } from '@reduxjs/toolkit';

const tokenSlice = createSlice({
    name: "authentication",
    initialState: {
        isConnected: false,
        token: null,
    },
    reducers: {
        signIn: (state, action) => {
            state.isConnected = true;
            state.token = action.payload;
        },
        signOut: (state) => {
            state.isConnected = false;
            state.token = null;
        },
    },
});
    
export const { signIn, signOut } = tokenSlice.actions;
export default tokenSlice.reducer;