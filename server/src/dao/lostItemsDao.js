import LostItem from "../models/LostItem.js";

const lostItemsDao = {
  createItem: (item) => LostItem.create(item),
  getLostItems: () => LostItem.find().populate('author').exec(),
  
}

export default lostItemsDao;