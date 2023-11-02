import { configureStore } from '@reduxjs/toolkit';
import userSlice, { setUser, editUserName } from './userSlice';
import tokenSlice, { signIn, signOut } from './tokenSlice';

const store =  configureStore({
    reducer: {
      authentication: tokenSlice,
      user: userSlice,
    },
});

export { signIn, signOut, setUser, editUserName };
export default store;