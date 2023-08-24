import FoundItem from "../models/FoundItem.js";

const foundItemsDao = {
  createItem: (item) => FoundItem.create(item),
  getFoundItems: () => FoundItem.find().populate('author').exec(),
  
}

export default foundItemsDao;