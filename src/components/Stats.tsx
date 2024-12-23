import React from 'react';
import { DollarSign, MousePointer } from 'lucide-react';

interface StatsProps {
  revenue: string;
  orders: number;
  visits: number;
  linkClicks: number;
}

export default function Stats({ revenue, orders, visits, linkClicks }: StatsProps) {
  return (
    <div className="grid grid-cols-2 gap-2 p-4 border-b ">
      <div className="bg-gray-50 p-3 rounded">
        <div className="flex items-center gap-2 text-gray-600 mb-1">
          <DollarSign className="w-4 h-4" />
          <span className="text-sm">Revenue</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-semibold">{revenue}</span>
          <span className="text-xs text-gray-500">{orders} Orders</span>
        </div>
      </div>
      <div className="bg-gray-50 p-3 rounded">
        <div className="flex items-center gap-2 text-gray-600 mb-1">
          <MousePointer className="w-4 h-4" />
          <span className="text-sm">Web Visits</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-semibold">{visits}</span>
          <span className="text-xs text-gray-500">{linkClicks} Link Clicks</span>
        </div>
      </div>
    </div>
  );
}