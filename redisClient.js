const redis = require('redis');
const { promisify } = require('util');

const redisClient = redis.createClient();

redisClient.on('connect', () => {
  console.log('Connected to Redis');
});

redisClient.on('error', (error) => {
  console.error('Error connecting to Redis:', error);
});

const asyncGet = promisify(redisClient.get).bind(redisClient);
const asyncSet = promisify(redisClient.set).bind(redisClient);

module.exports = { redisClient, asyncGet, asyncSet };

