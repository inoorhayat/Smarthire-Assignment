import { ChevronDown, MoreHorizontal, Phone, Plus, Search, Video } from 'lucide-react';
import Stats from './Stats';

export default function CustomerInfo() {
  return (
    <div className="w-80 border-l flex flex-col h-full bg-white">
      <div className="p-4 flex flex-col items-center border-b">
        <img 
          src="https://avatars.githubusercontent.com/u/144549805?v=4"
          alt="Customer" 
          className="w-16 h-16 rounded-full mb-2"
        />
        <h3 className="font-semibold">Oğuz Yağız Kara</h3>
        <p className="text-sm text-gray-500">11:59pm in Ankara, Turkey</p>
      </div>

      <div className="flex border-b">
        <button className="flex-1 p-4 text-center hover:bg-gray-50">
          <Phone className="w-5 h-5 mx-auto mb-1" />
          <span className="block text-sm">Call</span>
        </button>
        <button className="flex-1 p-4 text-center border-l hover:bg-gray-50">
          <Video className="w-5 h-5 mx-auto mb-1" />
          <span className="block text-sm">Video</span>
        </button>
        <button className="flex-1 p-4 text-center border-l hover:bg-gray-50">
          <MoreHorizontal className="w-5 h-5 mx-auto mb-1" />
          <span className="block text-sm">More</span>
        </button>
      </div>

      <Stats 
        revenue="$3,452"
        orders={3}
        visits={42}
        linkClicks={6}
      />

      <div className="relative">
        <Search className="w-4 h-4 absolute left-4 top-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search in general..."
          className="w-full p-3 pl-11 border-b text-sm"
        />
      </div>

      <div className="p-4 border-b">
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-medium">Information</h4>
          <button className="text-blue-600 text-sm flex items-center gap-1">
            <Plus className="w-4 h-4" /> Add
          </button>
        </div>
        
        <div className="space-y-3">
          <div>
            <label className="text-sm text-gray-500">Segment</label>
            <div className="flex items-center justify-between">
              <span className="text-sm">Abandoned Cart</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>
          
          <div>
            <label className="text-sm text-gray-500">Email</label>
            <div className="text-sm">oguzyagizkara@gmail.com</div>
          </div>
          
          <div>
            <label className="text-sm text-gray-500">Phone</label>
            <div className="text-sm">+90 535 646 81 77</div>
          </div>
          
          <div>
            <label className="text-sm text-gray-500">Last Visited</label>
            <div className="text-sm">8 Aug, 2021</div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-medium">Tags</h4>
          <button className="text-blue-600 text-sm flex items-center gap-1">
            <Plus className="w-4 h-4" /> Add
          </button>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
            Abandoned Cart User ×
          </span>
          <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
            Popup ×
          </span>
          <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
            Shop Error ×
          </span>
          <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
            Successful ×
          </span>
        </div>
      </div>
    </div>
  );
}