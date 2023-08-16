import { createSlice } from "@reduxjs/toolkit"
import { getProfileThunk, loginThunk, logoutThunk, registerThunk } from "../thunks/userThunks.js";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    isLoading: false,
    error: null
  },
  reducers: {},
  extraReducers: {
    [getProfileThunk.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getProfileThunk.fullfilled]: (state, action) => {
      state.currentUser = action.payload;
      console.log(action.payload);
      state.isLoading = false;
    },
    [registerThunk.pending]: (state, action) => {
      state.isLoading = true;
    },
    [registerThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    },
    [registerThunk.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    [loginThunk.pending]: (state, action) => {
      state.isLoading = true;
    },
    [loginThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    },
    [loginThunk.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    [logoutThunk.pending]: (state, action) => {
      state.isLoading = true;
    },
    [logoutThunk.fulfilled]: (state, action) => {
      state.currentUser = null;
      state.isLoading = false;
    },
    [logoutThunk.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    }
  }
})

export default userSlice.reducer;