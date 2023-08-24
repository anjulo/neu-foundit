import mongoose from "mongoose";

const lostItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  lostDate: { type: String, required: true },
  reportDate: { type: Date, required: true },
  // status: { type: String, required: false },
  // image: { type: String, required: false },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  // comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

const LostItem = mongoose.model("LostItem", lostItemSchema);
export default LostItem;