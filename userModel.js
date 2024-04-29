const pool = require('../config/db');
const bcrypt = require('bcryptjs');

class User {
  async createUserRecord({ username, password }) {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const query = 'INSERT INTO users (username, password_hash, created_at) VALUES ($1, $2, NOW()) RETURNING id, username';
      const values = [username, hashedPassword];
      const { rows } = await pool.query(query, values);
      return rows[0];
    } catch (error) {
      throw error;
    }
  }

  async getUserByUsername(username) {
    try {
      const query = 'SELECT * FROM users WHERE username = $1';
      const { rows } = await pool.query(query, [username]);
      return rows[0];
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new User();

