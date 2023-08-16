import { createSlice } from "@reduxjs/toolkit"
import { getProfileThunk } from "../thunks/userThunks.js";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    isLoading: false,
    error: null
  },
  reducers: {},
  extraReducers: {
    [getProfileThunk.fullfilled]: (state, action) => {
      state.currentUser = action.payload;
      console.log(action.payload);
      state.isLoading = false;
    },
    [getProfileThunk.pending]: (state, action) => {
      state.isLoading = true;
    },
  }
})

export default userSlice.reducer;