import User from "../models/User"

const usersDao = {
  createUser: (username, password) => User.create({username, password}),
  updateUser: (uid, updates) => User.updateOne({_id: uid}, {$set: updates}),
  deleteUser: (uid) => User.deleteOne({_id: uid}),
  findByEmail: (email) => User.findOne({email}),
  findByUserName: (username) => User.findOne({username}),
  findByCredentials: (credentials) => User.findOne(credentials)
}

export default userDao;