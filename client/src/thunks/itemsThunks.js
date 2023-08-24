import { createAsyncThunk } from "@reduxjs/toolkit";
import itemsServices from "services/itemsServices.js";

const createLostItemThunk = createAsyncThunk(
  'createLostItem',
  async item => await itemsServices.createLostItem(item)
)
const getLostItemsThunk = createAsyncThunk(
  'getLostItems',
  async () => await itemsServices.getLostItems()
)
const createFoundItemThunk = createAsyncThunk(
  'createFoundItem',
  async item => await itemsServices.createFoundItem(item)
)
const getFoundItemsThunk = createAsyncThunk(
  'getFoundItems',
  async () => await itemsServices.getFoundItems()
)

export {createLostItemThunk, getLostItemsThunk, createFoundItemThunk, getFoundItemsThunk}
