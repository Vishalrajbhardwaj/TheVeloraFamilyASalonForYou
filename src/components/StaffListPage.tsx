import  { useEffect, useState } from 'react';
import { fetchStaff, Staff } from '../data/staff';

export const StaffListPage = () => {
  const [staff, setStaff] = useState<Staff[]>([]);

  useEffect(() => {
    (async () => {
      const s = await fetchStaff();
      setStaff(s);
    })();
  }, []);

  return (
    <div className="min-h-screen py-12 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Our Staff</h1>
        <div className="grid gap-4">
          {staff.map((s) => (
            <div key={s.id} className="p-4 rounded-xl shadow-sm bg-gray-50 flex justify-between items-center">
              <div>
                <div className="font-semibold text-lg">{s.name}</div>
                <div className="text-sm text-gray-600">{s.specialization || 'General'}</div>
              </div>
              <div className="text-sm text-amber-600">ID: {s.id}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaffListPage;