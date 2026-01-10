import React from 'react';
import { mockServices, Service } from '../lib/mockServices';

interface Props {
  onBookService: (serviceId: string) => void;
}

export const ServicesList: React.FC<Props> = ({ onBookService }) => {
  return (
    <div className="py-12 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">All Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mockServices.map((s: Service) => (
          <div key={s.id} className="p-4 border rounded-lg bg-white shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{s.name}</h3>
              <span className="text-sm text-gray-600">{s.price}</span>
            </div>
            {s.description && <p className="text-sm text-gray-700 mt-2">{s.description}</p>}
            <div className="mt-4 flex items-center justify-between">
              <div className="text-xs text-gray-500">{s.category} • {s.duration} min</div>
              <button
                onClick={() => onBookService(s.id)}
                className="px-3 py-1 bg-amber-500 text-white rounded hover:bg-amber-600 text-sm"
              >
                Book
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
