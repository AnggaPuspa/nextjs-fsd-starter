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
    <div className="flex bg-white border border-neutral-200 rounded-lg p-1 space-x-1">
      {ranges.map((r) => (
        <button
          key={r.value}
          onClick={() => setRange(r.value)}
          className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
            range === r.value 
              ? 'bg-blue-50 text-blue-700' 
              : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50'
          }`}
        >
          {r.label}
        </button>
      ))}
    </div>
  );
}
