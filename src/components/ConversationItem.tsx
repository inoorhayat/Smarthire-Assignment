import React from 'react';
import { Check } from 'lucide-react';

interface ConversationItemProps {
  avatar: string;
  name: string;
  time: string;
  message: string;
  isRead?: boolean;
  hasAttachment?: boolean;
  platform?: 'messenger' | 'whatsapp' | 'instagram';
}

export default function ConversationItem({ 
  avatar, 
  name, 
  time, 
  message, 
  isRead,
  hasAttachment,
  platform 
}: ConversationItemProps) {
  const getPlatformIcon = () => {
    switch (platform) {
      case 'messenger':
        return '📱';
      case 'whatsapp':
        return '💬';
      case 'instagram':
        return '📸';
      default:
        return null;
    }
  };

  return (
    <div className="p-3 hover:bg-gray-50 cursor-pointer border-b">
      <div className="flex gap-2">
        <div className="relative">
          <img 
            src={avatar}
            alt={name}
            className="w-10 h-10 rounded-full"
          />
          {platform && (
            <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center text-xs">
              {getPlatformIcon()}
            </span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-center">
            <span className="font-medium text-sm">{name}</span>
            <span className="text-xs text-gray-500">{time}</span>
          </div>
          <div className="flex items-center gap-1">
            {hasAttachment && <span className="text-xs">📎</span>}
            <p className="text-sm text-gray-600 truncate flex-1">{message}</p>
            {isRead && <Check className="w-4 h-4 text-blue-500" />}
          </div>
        </div>
      </div>
    </div>
  );
}