// ChatBot.js
import React, { useState } from 'react';

const ChatBot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    // Add user message
    setMessages((prevMessages) => [...prevMessages, { sender: 'user', text: input }]);

    try {
      // Make a request to your chatbot API
      const response = await fetch('https://your-chatbot-api.com/endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`, // Ensure your API key is stored in .env file
        },
        body: JSON.stringify({ message: input }), // Adjust according to your API structure
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      // Add bot response
      setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: data.response }]); // Adjust based on your API response structure
    } catch (error) {
      console.error('Error fetching from API:', error);
      setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: 'Sorry, I encountered an error.' }]);
    }

    setInput('');
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}>
      <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', height: '300px', overflowY: 'scroll', marginBottom: '10px' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.sender === 'bot' ? 'left' : 'right', margin: '5px 0' }}>
            <strong>{msg.sender === 'bot' ? 'Bot' : 'You'}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message..."
          style={{ flex: 1, padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ marginLeft: '10px', padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#4CAF50', color: 'white' }}>
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatBot;
