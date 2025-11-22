import { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { ServicesPage } from './components/ServicesPage';
import { BookingPage } from './components/BookingPage';
import { AuthPage } from './components/AuthPage';
import { MyBookingsPage } from './components/MyBookingsPage';
import { AdminDashboard } from './components/AdminDashboard';
import { AboutPage } from './components/AboutPage';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>();
  const { loading } = useAuth();

  const handleBookService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setCurrentPage('booking');
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    if (page !== 'booking') {
      setSelectedServiceId(undefined);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-pink-50 to-purple-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-amber-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />

      {currentPage === 'home' && (
        <HomePage
          onBookNow={() => setCurrentPage('booking')}
          onNavigateServices={() => setCurrentPage('services')}
        />
      )}
      {currentPage === 'services' && <ServicesPage onBookService={handleBookService} />}
      {currentPage === 'booking' && <BookingPage preSelectedServiceId={selectedServiceId} />}
      {currentPage === 'auth' && <AuthPage onSuccess={() => setCurrentPage('home')} />}
      {currentPage === 'my-bookings' && <MyBookingsPage />}
      {currentPage === 'admin' && <AdminDashboard />}
      {currentPage === 'about' && <AboutPage />}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
