const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config');

module.exports = (req, res, next) => {

  // Get token from header
  const token = req.header('Authorization here');

  // Check if token doesn't exist
  
  if (!token) {
    return res.status(401).json({ message: 'Authorization denied due to No token provided have provide here .' });
  }

  try {
  
    // Verify token
    const decoded = jwt.verify(token, jwtSecret);

    // Add user from token payload
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token are there ' });
  }
};

