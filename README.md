# Real-time Chat Application

## Description

This is a simplified, scalable real-time chat application capable of supporting private one-on-one messages. The application handles a significant number of concurrent users efficiently, ensuring real-time communication without noticeable lag.

## Technologies Used

- Database: Postgres
- Caching: Redis
- Messaging Queue: Kafka
- Backend Development: Node.js
- Testing: Jest
- Performance Testing: JMeter

## Features

- User Account Management: Sign up, sign in, and user profile management.
- Chat Functionality: Real-time messaging, including private chats.
- Message History: Storage and retrieval of message history from Postgres.
- Session Management and Caching: Use Redis for managing user sessions and caching recent messages.
- Message Queue: Utilize Kafka to handle real-time message delivery.
- Security: Implement basic authentication, authorization, and message encryption.
- APIs: Develop RESTful and WebSocket endpoints.

## Setup Instructions

1. **Clone the repository:**

```bash
git clone <https://github.com/thepotdar/Real-time_Chat-_Application.git>


2. Install Dependencies:
bash
Copy code
cd real-time-chat-app
npm install

3. Start the Server:
bash
Copy code
npm start
