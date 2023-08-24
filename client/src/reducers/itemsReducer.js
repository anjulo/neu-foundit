import { createSlice } from "@reduxjs/toolkit"
import { createFoundItemThunk, createLostItemThunk, getFoundItemsThunk, getLostItemsThunk } from "thunks/itemsThunks.js";


const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    lostItems: [],
    isLostItemsLoading: false,
    lostItemsError: null,
    foundItems: [],
    isFoundItemsLoading: false,
    foundItemsError: null,
  },
  reducers: {},
  extraReducers: {
    [createLostItemThunk.pending]: (state, action) => {
      state.isLostItemsLoading = true;
    },
    [createLostItemThunk.fulfilled]: (state, action) => {
      state.lostItems.push(action.payload);
      state.isLostItemsLoading = false;
    },
    [createLostItemThunk.rejected]: (state, action) => {
      state.lostItemsError = action.error.message;
      state.isLostItemsLoading = false;
    },
    [getLostItemsThunk.pending]: (state, action) => {
      state.isLostItemsLoading = true;
    },
    [getLostItemsThunk.fulfilled]: (state, action) => {
      state.lostItems = action.payload;
      state.isLostItemsLoading = false;
    },
    [getLostItemsThunk.rejected]: (state, action) => {
      state.lostItemsError = action.error.message;
      state.isLostItemsLoading = false;
    },
  
    [createFoundItemThunk.pending]: (state, action) => {
      state.isFoundItemsLoading = true;
    },
    [createFoundItemThunk.fulfilled]: (state, action) => {
      state.foundItems.push(action.payload);
      state.isFoundItemsLoading = false;
    },
    [createFoundItemThunk.rejected]: (state, action) => {
      state.foundItemsError = action.error.message;
      state.isFoundItemsLoading = false;
    },
    [getFoundItemsThunk.pending]: (state, action) => {
      state.isFoundItemsLoading = true;
    },
    [getFoundItemsThunk.fulfilled]: (state, action) => {
      state.foundItems = action.payload;
      state.isFoundItemsLoading = false;
    },
    [getFoundItemsThunk.rejected]: (state, action) => {
      state.foundItemsError = action.error.message;
      state.isFoundItemsLoading = false;
    },

  }
})

export default itemsSlice.reducer;