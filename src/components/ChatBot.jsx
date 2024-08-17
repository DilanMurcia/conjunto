import React, { useState } from 'react';
import { FaRobot } from 'react-icons/fa';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4">
      <button
        onClick={toggleChat}
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg focus:outline-none"
      >
        <FaRobot size={24} />
      </button>
      {isOpen && (
        <div className="bg-white p-4 rounded-lg shadow-lg mt-2">
          <h2 className="text-xl font-bold mb-2">ChatBot</h2>
          <p>Welcome to our website! How can I help you?</p>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
