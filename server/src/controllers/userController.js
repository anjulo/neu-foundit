import usersDao from "../dao/usersDao.js"


const userController = (app) => {
  app.post('/api/register', registerUser);
  app.post('/api/login', loginUser);
  app.post('/api/logout', logoutUser);
  app.post('/api/profile', getProfile);
}

const registerUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const existringUser = await usersDao.findByUserName(username);
    if (existringUser) {
      res.status(409).json({ error: "User already exists" });
      return;
    }
    let newUser = await usersDao.createUser(username, password);
    newUser = newUser.toObject();
    delete newUser.password;
    req.session.user = newUser;
    res.status(201).json(newUser); // created
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error" })
  }
}
const loginUser = async (req, res) => {
  const credentials = req.body;
  try {
    const user = await usersDao.findByCredentials(credentials);
    if (user) {
      req.session.user = user;
      res.status(200).json(user); // ok
      return;
    }
    res.status(401).json({ error: "Invalid credentials" });
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error" })
  }
}
const logoutUser = async (req, res) => {
  try {
    await req.session.destroy();
    res.sendStatus(200);
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error" })
  }
}
// return loged in user
const getProfile = async (req, res) => {
  try {
    const user = req.session.user;
    res.status(200).json(user);
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error" })
  }
}

export default userController;
