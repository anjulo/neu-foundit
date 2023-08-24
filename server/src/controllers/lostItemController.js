import lostItemsDao from "../dao/lostItemsDao.js";


const lostItemsController = (app) => {
  app.post('/api/lost', createLostItem);
  app.get('/api/lost', getLostItems);
  // app.get('/api/lost/:id', getLostItem);
  // app.put('/api/lost/:id', updateLostItem);
  // app.delete('/api/lost/:id', deleteLostItem);
}

const createLostItem = async (req, res) => {
  const item = req.body;
  console.log(typeof item.lostDate)
  item.author = req.session.user._id;
  item.reportDate = new Date();
  console.log(item);
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


export default lostItemsController;
