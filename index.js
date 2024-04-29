<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Real-time Chat App</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>Real-time Chat App</h1>
    <div class="chat-container">
      <div id="chat-messages"></div>
      <form id="chat-form">
        <input type="text" id="message-input" placeholder="Type your message...">
        <button type="submit">Send</button>
      </form>
    </div>
  </div>

  <script src="/socket.io/socket.io.js"></script>
  <script src="client.js"></script>
</body>
</html>

