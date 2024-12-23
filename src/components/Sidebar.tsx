import React from 'react';
import { MessageSquare, Filter, Search, Plus } from 'lucide-react';
import ConversationItem from './ConversationItem';

const conversations = [
  {
    avatar: "https://avatars.githubusercontent.com/u/144549805?v=4",
    name: "Oğuz Yağız Kara",
    time: "+ 5m",
    message: "I keep getting \"error while creating a new pop up\" for...",
    isRead: true,
    platform: 'messenger'
  },
  {
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
    name: "Noor Hayat",
    time: "1h 54m",
    message: "Wow, this is really epic man! Thank...",
    platform: 'messenger'
  },
  {
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
    name: "8882840674",
    time: "6h 21m",
    message: "Haha oh man, this is amazing!",
    platform: 'whatsapp'
  }
];

export default function Sidebar() {
  return (
    <div className="w-72 border-r flex flex-col h-full bg-white">
      <div className="p-4 flex items-center justify-between border-b">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <MessageSquare className="w-4 h-4 text-white" />
          </div>
          <div>
            <h2 className="font-semibold">BlueChat</h2>
            <p className="text-xs text-gray-500">Inbox</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Search className="w-4 h-4" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="border-b">
        <div className="flex">
          <button className="flex-1 px-4 py-2 border-b-2 border-blue-600 text-sm font-medium">
            Messages
          </button>
          <button className="flex-1 px-4 py-2 text-gray-500 text-sm">
            Segments
          </button>
        </div>
      </div>

      <div className="flex items-center p-2 gap-2">
        <div className="flex items-center gap-2 flex-1 bg-gray-100 rounded px-3 py-1.5">
          <span className="text-gray-600 text-sm">All</span>
          <span className="text-xs bg-gray-200 px-1.5 rounded">232</span>
        </div>
        <button className="text-gray-500 px-2 text-sm flex items-center gap-1">
          <Filter className="w-4 h-4 rotate-180" />
          Oldest
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {conversations.map((conv, index) => (
          <ConversationItem key={index} {...conv} />
        ))}
      </div>
    </div>
  );
}