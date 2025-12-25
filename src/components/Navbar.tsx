import { useState } from 'react';
import { Menu, X, LogOut, Calendar } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export const Navbar = ({ onNavigate, currentPage }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, profile, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    onNavigate('home');
  };

  return (
    <nav className="bg-gray-800 shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center space-x-3 group"
            >
              <img
                src="/velora-logo1.png"
                alt="Logo"
                className="h-16 w-16 object-contain"
              />
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-amber-600 to-pink-600 bg-clip-text text-transparent">
                  The Velora
                </h1>
                <p className="text-xs text-gray-300 italic">A Family Salon for U</p>
              </div>
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              onClick={() => onNavigate('home')}
              active={currentPage === 'home'}
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => onNavigate('about')}
              active={currentPage === 'about'}
            >
              About
            </NavLink>
            <NavLink
              onClick={() => onNavigate('services')}
              active={currentPage === 'services'}
            >
              Services
            </NavLink>
            <NavLink
              onClick={() => onNavigate('booking')}
              active={currentPage === 'booking'}
            >
              Book Now
            </NavLink>
            <NavLink
              onClick={() => onNavigate('photo-video')}
              active={currentPage === 'photo-video'}
            >
              Gallery
            </NavLink>
            <NavLink
              onClick={() => onNavigate('contact')}
              active={currentPage === 'contact'}
            >
              Contact
            </NavLink>

            {user ? (
              <div className="flex items-center space-x-4">
                {profile?.role === 'Admin' && (
                  <button
                    onClick={() => onNavigate('admin')}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Admin Dashboard
                  </button>
                )}
                <button
                  onClick={() => onNavigate('my-bookings')}
                  className="flex items-center space-x-2 text-gray-200 hover:text-amber-600 transition-colors"
                >
                  <Calendar className="h-5 w-5" />
                  <span>My Bookings</span>
                </button>
                <button
                  onClick={handleSignOut}
                  className="flex items-center space-x-2 text-gray-200 hover:text-red-600 transition-colors"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <button
                onClick={() => onNavigate('auth')}
                className="px-6 py-2 bg-gradient-to-r from-amber-500 to-pink-500 text-white rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Login / Sign Up
              </button>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 hover:text-amber-600 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t animate-fadeIn">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink onClick={() => { onNavigate('home'); setIsOpen(false); }}>
              Home
            </MobileNavLink>
            <MobileNavLink onClick={() => { onNavigate('services'); setIsOpen(false); }}>
              Services
            </MobileNavLink>
            <MobileNavLink onClick={() => { onNavigate('booking'); setIsOpen(false); }}>
              Book Now
            </MobileNavLink>
            <MobileNavLink onClick={() => { onNavigate('about'); setIsOpen(false); }}>
              About
            </MobileNavLink>
            <MobileNavLink onClick={() => { onNavigate('photo-video'); setIsOpen(false); }}>
              Photo & Video
            </MobileNavLink>

            {user ? (
              <>
                <MobileNavLink onClick={() => { onNavigate('admin'); setIsOpen(false); }}>
                  Dashboard
                </MobileNavLink>
                <MobileNavLink onClick={() => { onNavigate('my-bookings'); setIsOpen(false); }}>
                  My Bookings
                </MobileNavLink>
                <MobileNavLink onClick={() => { handleSignOut(); setIsOpen(false); }}>
                  Logout
                </MobileNavLink>
              </>
            ) : (
              <MobileNavLink onClick={() => { onNavigate('auth'); setIsOpen(false); }}>
                Login / Sign Up
              </MobileNavLink>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ children, onClick, active }: { children: React.ReactNode; onClick: () => void; active: boolean }) => (
  <button
    onClick={onClick}
    className={`relative text-sm font-medium transition-colors ${
      active
        ? 'text-amber-600'
        : 'text-gray-200 hover:text-amber-600'
    }`}
  >
    {children}
    {active && (
      <span className="absolute -bottom-5 left-0 w-full h-0.5 bg-gradient-to-r from-amber-500 to-pink-500" />
    )}
  </button>
);

const MobileNavLink = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-md transition-colors"
  >
    {children}
  </button>
);
