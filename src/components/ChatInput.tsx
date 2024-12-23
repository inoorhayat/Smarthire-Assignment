import React, { useState } from 'react';
import { Smile, Paperclip, Send } from 'lucide-react';

export default function ChatInput() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle message submission
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border-t p-4">
      <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-2">
        <button type="button" className="p-2 hover:bg-gray-200 rounded-full">
          <Smile className="w-5 h-5 text-gray-500" />
        </button>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 bg-transparent outline-none"
        />
        <button type="button" className="p-2 hover:bg-gray-200 rounded-full">
          <Paperclip className="w-5 h-5 text-gray-500" />
        </button>
        <button 
          type="submit" 
          className="p-2 bg-blue-600 hover:bg-blue-700 rounded-full"
        >
          <Send className="w-5 h-5 text-white" />
        </button>
      </div>
    </form>
  );
}