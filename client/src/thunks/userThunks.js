import { createAsyncThunk } from "@reduxjs/toolkit";
import userServices from "../services/userServices.js";

const registerThunk = createAsyncThunk(
  'register',
  async user => await userServices.register(user)
)
const loginThunk = createAsyncThunk(
  'login',
  async user => await userServices.login(user)
)
const logoutThunk = createAsyncThunk(
  'logout',
  async () => await userServices.logout()
)
const getProfileThunk = createAsyncThunk(
  'getProfile',
  async () => await userServices.getProfile()
)

export {registerThunk, loginThunk, logoutThunk, getProfileThunk}
