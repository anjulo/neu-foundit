import { createSlice } from "@reduxjs/toolkit"
import { createLostItemThunk, getLostItemsThunk } from "thunks/lostItemsThunks.js";


const lostItemsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
    isLoading: false,
    error: null
  },
  reducers: {},
  extraReducers: {
    [createLostItemThunk.pending]: (state, action) => {
      state.isLoading = true;
    },
    [createLostItemThunk.fulfilled]: (state, action) => {
      state.items.push(action.payload);
      state.isLoading = false;
    },
    [createLostItemThunk.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
    [getLostItemsThunk.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getLostItemsThunk.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [getLostItemsThunk.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    }
  }
})

export default lostItemsSlice.reducer;