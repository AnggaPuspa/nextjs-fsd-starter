'use client';

import { useState } from 'react';

export function DateRangePicker() {
  const [range, setRange] = useState('7D');

  const ranges = [
    { label: 'Hari Ini', value: '1D' },
    { label: '7 Hari', value: '7D' },
    { label: '30 Hari', value: '30D' },
  ];

  return (
    <div className="flex bg-white border border-gray-200 rounded-[30px] p-1 space-x-1">
      {ranges.map((r) => (
        <button
          key={r.value}
          onClick={() => setRange(r.value)}
          className={`px-4 py-1.5 text-sm font-medium rounded-[30px] transition-all ${
            range === r.value
              ? 'bg-blue-600 text-white'
              : 'text-gray-400 hover:text-gray-500 hover:bg-gray-100'
          }`}
        >
          {r.label}
        </button>
      ))}
    </div>
  );
}
