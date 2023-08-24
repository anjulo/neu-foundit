import mongoose from "mongoose";

const foundItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  foundDate: { type: String, required: true },
  reportDate: { type: Date, required: true },
  // status: { type: String, required: false },
  // image: { type: String, required: false },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  // comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

export default mongoose.model("FoundItem", foundItemSchema);