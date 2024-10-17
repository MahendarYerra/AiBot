// App.js
import React from 'react';
import './App.css';
import ChatBot from './ChatBot'; // Ensure the path to ChatBot.js is correct

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#f0f8ff', minHeight: '100vh', padding: '20px' }}>
      <header style={{
        backgroundColor: '#4CAF50', 
        padding: '20px', 
        borderRadius: '10px', 
        color: 'white', 
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}>
        <h1 style={{ fontSize: '2.5rem', fontFamily: 'Arial, sans-serif', letterSpacing: '1px' }}>My Amazing ChatBot</h1>
        <p style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', color: '#f9f9f9' }}>
          Chat with our AI-powered assistant and get the inspiration you need!
        </p>
      </header>

      <div style={{
        marginTop: '20px', 
        padding: '20px', 
        backgroundColor: '#ffffff', 
        borderRadius: '10px', 
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        color: '#333',
      }}>
        <ChatBot />
      </div>

      <footer style={{
        marginTop: '20px',
        textAlign: 'center', 
        color: '#777', 
        fontSize: '0.9rem', 
        fontFamily: 'Courier New, Courier, monospace',
      }}>
        <p>&copy; 2024 My React ChatBot. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
