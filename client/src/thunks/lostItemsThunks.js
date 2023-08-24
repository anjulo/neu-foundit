import { createAsyncThunk } from "@reduxjs/toolkit";
import lostItemsServices from "services/lostItemsServices.js";

const createLostItemThunk = createAsyncThunk(
  'createLostItem',
  async item => await lostItemsServices.createLostItem(item)
)
const getLostItemsThunk = createAsyncThunk(
  'getLostItems',
  async () => await lostItemsServices.getLostItems()
)

export {createLostItemThunk, getLostItemsThunk}
