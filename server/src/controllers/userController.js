import usersDao from "../dao/usersDAO.js"

const userController = (app) => {
  app.post('/api/register', registerUser);
  app.post('/api/login', loginUser);
  app.post('/api/logout', logoutUser);
  app.post('/api/profile', getProfile);
}

const registerUser = async (req, res) => {
  const {username, password} = req.body;
  try {
    const user = await userDao.createUser(username, password);
    req.session.user = user;
    res.status(201).json(user);
  } catch (e) {
    res.status(403).send(e.message);
  }
}
const loginUser = async (req, res) => {
  const credentials = req.body;
  try {
    const user = await userDao.findByCredentials(credentials);
    req.session.user = user;
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e.message);
  }
}
const logoutUser = async (req, res) => {
  req.session.destroy();
  res.status(200).send('logged out');
}
// return loged in user
const getProfile = async (req, res) => {
  if (req.session.user) {
    res.send(req.session.user);
  } else {
    res.status(401).send('not logged in');
  }
}

export default userController;
