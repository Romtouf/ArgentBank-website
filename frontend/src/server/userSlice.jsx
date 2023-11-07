import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        userData: {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            userName: "",
        },
    },
    reducers: {
        setUser: (state, action) => {
            state.userData = action.payload.body;
        },
        editUser: (state, action) => {
            state.userData.userName = action.payload;
        }
    },
},)

export const { setUser, editUser } = userSlice.actions;
export default userSlice.reducer;