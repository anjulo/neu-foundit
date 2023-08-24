import foundItemsDao from "../dao/foundItemsDao.js";
import lostItemsDao from "../dao/lostItemsDao.js";


const lostItemsController = (app) => {
  app.post('/api/lost', createLostItem);
  app.get('/api/lost', getLostItems);
  // app.get('/api/lost/:id', getLostItem);
  // app.put('/api/lost/:id', updateLostItem);
  // app.delete('/api/lost/:id', deleteLostItem);
  app.post('/api/found', createFoundItem);
  app.get('/api/found', getFoundItems);
}

const createLostItem = async (req, res) => {
  const item = req.body;
  item.author = req.session.user._id;
  item.reportDate = new Date();
  try {
    const createdItem = await lostItemsDao.createItem(item);
    res.status(200).json(createdItem);
  }
  catch (e) {
    res.status(500).json({ error: "Internal Server Error" })
  }
}
const getLostItems = async (req, res) => {
  try {
    const items = await lostItemsDao.getLostItems();
    res.status(200).json(items);
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error" })
  }
}

const createFoundItem = async (req, res) => {
  const item = req.body;
  item.author = req.session.user._id;
  item.reportDate = new Date();
  // console.log(item);
  try {
    const createdItem = await foundItemsDao.createItem(item);
    res.status(200).json(createdItem);
  }
  catch (e) {
    res.status(500).json({ error: "Internal Server Error" })
  }
}
const getFoundItems = async (req, res) => {
  try {
    const items = await foundItemsDao.getFoundItems();
    // console.log(items)
    res.status(200).json(items);
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error" })
  }
}


export default lostItemsController;
