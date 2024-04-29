const chatService = require('../services/chatService');

exports.saveMessage = async (req, res, next) => {
  try {
    const { senderId, receiverId, message } = req.body;
    if (!senderId || !receiverId || !message) {
      throw new Error('Sender ID, receiver ID, and message are required');
    }
    const savedMessage = await chatService.saveMessage({ senderId, receiverId, message });
    res.status(201).json({ message: 'Message saved successfully', savedMessage });
  } catch (error) {
    next(error);
  }
};

exports.getChatHistory = async (req, res, next) => {
  try {
    const { userId, friendId } = req.params;
    if (!userId || !friendId) {
      throw new Error('User ID and friend ID are required');
    }
    const chatHistory = await chatService.getChatHistory({ userId, friendId });
    res.json(chatHistory);
  } catch (error) {
    next(error);
  }
};

