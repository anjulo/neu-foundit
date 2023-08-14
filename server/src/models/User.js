import mongoose from "mongoose";


const userScema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
})

const User = mongoose.model("User", userScema);
export default User;