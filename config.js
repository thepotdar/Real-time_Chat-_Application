require('dotenv').config();

module.exports = {
  port: process.env.PORT || 2000,
  jwtSecret: process.env.JWT_SECRET,
  redisHost: process.env.REDIS_HOST,
  redisPort: process.env.REDIS_PORT,
  kafkaHost: process.env.KAFKA_HOST,
  dbConfig: {
    user: process.env.the_potdar,
    host: process.env.nikhil,
    database: process.env.chatbox,
    password: process.env.chat123,
    port: 5239,
  }
};

