const express = require('express');
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');
const { Kafka } = require('kafkajs');
const { redisClient, asyncGet, asyncSet } = require('./redisClient');
const { sendMessage } = require('./kafkaProducer');

// Load environment variables from .env file
dotenv.config();

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Routes
const authRoutes = require('./routes/authRoutes');
const chatRoutes = require('./routes/chatRoutes');

app.use('/auth', authRoutes);
app.use('/chat', chatRoutes);

// Kafka producer
const kafka = new Kafka({
  clientId: 'my-app',
  brokers: [process.env.KAFKA_HOST]
});
const producer = kafka.producer();

// Connect to Redis
redisClient.on('connect', () => {
  console.log('Connected to Redis here ');
});

// Connect to Kafka producer
producer.connect()
  .then(() => console.log('Connected to Kafka here '))
  .catch(error => console.error('Error connecting to Kafka here :', error));

// Error handler middleware
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ error: 'Internal Server Error here ' });
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port  on the same ${PORT}`);
});

