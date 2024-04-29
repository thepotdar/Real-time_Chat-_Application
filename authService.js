const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { jwtSecret } = require('../config');

class AuthService {
  async registerUser({ username, password }) {
    try {
      const existingUser = await userModel.getUserByUsername(username);
      if (existingUser) {
        throw new Error('Username already exists');
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await userModel.createUser({ username, password: hashedPassword });
      return user;
    } catch (error) {
      throw error;
    }
  }

  async loginUser({ username, password }) {
    try {
      const user = await userModel.getUserByUsername(username);
      if (!user) {
        throw new Error('Invalid credentials');
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        throw new Error('Invalid credentials');
      }
      const token = jwt.sign({ userId: user.id, username: user.username }, jwtSecret);
      return { user, token };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new AuthService();

