import React from 'react';

interface ChatMessageProps {
  content: string;
  timestamp: string;
  isOutgoing?: boolean;
  sender?: string;
  avatar?: string;
}

export default function ChatMessage({ content, timestamp, isOutgoing, sender, avatar }: ChatMessageProps) {
  return (
    <div className={`flex gap-2 mb-4 ${isOutgoing ? 'flex-row-reverse' : ''}`}>
      {!isOutgoing && avatar && (
        <img src={avatar} alt={sender} className="w-8 h-8 rounded-full" />
      )}
      <div className={`max-w-[70%] ${isOutgoing ? 'ml-auto' : ''}`}>
        {sender && <div className="text-sm text-gray-600 mb-1">{sender}</div>}
        <div className={`p-3 rounded-2xl ${
          isOutgoing 
            ? 'bg-blue-600 text-white' 
            : 'bg-gray-100'
        }`}>
          {content}
        </div>
        <div className="text-xs text-gray-500 mt-1">{timestamp}</div>
      </div>
    </div>
  );
}