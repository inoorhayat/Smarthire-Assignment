import React from 'react';
import { MessageSquare, Phone, Video, MoreHorizontal } from 'lucide-react';

export default function ChatHeader() {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center gap-4">
        <img
          src="https://avatars.githubusercontent.com/u/144549805?v=4"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h2 className="font-semibold">Oğuz Yağız Kara</h2>
          <p className="text-sm text-gray-500">11:59pm in Ankara, Turkey</p>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <button className="hover:bg-gray-100 p-2 rounded-full">
          <Phone className="w-5 h-5" />
        </button>
        <button className="hover:bg-gray-100 p-2 rounded-full">
          <Video className="w-5 h-5" />
        </button>
        <button className="hover:bg-gray-100 p-2 rounded-full">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}