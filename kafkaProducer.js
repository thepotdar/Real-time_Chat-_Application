const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:8087']
});

const producer = kafka.producer();

const sendMessage = async (topic, message) => {
  try {
    await producer.connect();
    await producer.send({
      topic,
      messages: [
        { value: JSON.stringify(message) }
      ],
    });
    console.log('Message sent successfully here n:', message);
  } catch (error) {
    console.error('Error sending message here :', error);
  } finally {
    await producer.disconnect();
  }
};

module.exports = { sendMessage };

