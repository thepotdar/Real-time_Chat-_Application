const pool = require('../config/db');

class Chat {
  async saveMessage({ senderId, receiverId, message }) {
    try {
      const query = 'INSERT INTO messages (sender_id, receiver_id, message, created_at) VALUES ($1, $2, $3, NOW()) RETURNING *';
      const values = [senderId, receiverId, message];
      const { rows } = await pool.query(query, values);
      return rows[0];
    } catch (error) {
      throw error;
    }
  }

  async getChatHistory({ userId, friendId }) {
    try {
      const query = `
        SELECT * 
        FROM messages 
        WHERE (sender_id = $1 AND receiver_id = $2) OR (sender_id = $2 AND receiver_id = $1) 
        ORDER BY created_at`;
      const values = [userId, friendId];
      const { rows } = await pool.query(query, values);
      return rows;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new Chat();

