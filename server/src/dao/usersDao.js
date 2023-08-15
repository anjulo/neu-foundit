import User from "../models/User.js"

const usersDao = {
  createUser: (username, password) => User.create({username, password}),
  updateUser: (uid, updates) => User.updateOne({_id: uid}, {$set: updates}),
  deleteUser: (uid) => User.deleteOne({_id: uid}),
  findByEmail: (email) => User.findOne({email}, {password: false}),
  findByUserName: (username) => User.findOne({username}, {password: false}),
  findByCredentials: (credentials) => User.findOne(credentials, {password: false})
}

export default usersDao;