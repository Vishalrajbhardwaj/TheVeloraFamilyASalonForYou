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
    <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-amber-50 via-pink-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the talented professionals behind The Velora Family Salon, dedicated to providing exceptional beauty and grooming services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staff.map((s) => (
            <div key={s.id} className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 p-6 text-center">
              {s.photo && (
                <img
                  src={s.photo}
                  alt={s.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-amber-200"
                />
              )}
              <div className="font-bold text-xl text-gray-800 mb-2">{s.name}</div>
              <div className="text-sm text-gray-600">{s.specialization || 'General'}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaffListPage;