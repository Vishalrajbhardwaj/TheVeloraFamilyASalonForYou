import { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ServicesPage } from './components/ServicesPage';
import { ServicesList } from './components/ServicesList';
import { BookingPage } from './components/BookingPage';
import { AuthPage } from './components/AuthPage';
import { MyBookingsPage } from './components/MyBookingsPage';
import { AdminDashboard } from './components/AdminDashboard';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { PhotoVideoPage } from './components/PhotoVideoPage';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>();
  const { loading, profile } = useAuth();

  const handleBookService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setCurrentPage('booking');
  };

  const [selectedGender, setSelectedGender] = useState<string | undefined>();

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    if (page !== 'booking') {
      setSelectedServiceId(undefined);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateServices = (gender: string) => {
    setSelectedGender(gender);
    setCurrentPage('services');
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
          onNavigateServices={handleNavigateServices}
          onNavigateGallery={() => setCurrentPage('photo-video')}
        />
      )}
      {currentPage === 'services' && <ServicesPage onBookService={handleBookService} onOpenList={() => setCurrentPage('service-list')} selectedGender={selectedGender} />}
      {currentPage === 'service-list' && <ServicesList onBookService={handleBookService} />}
      {currentPage === 'booking' && <BookingPage preSelectedServiceId={selectedServiceId} />}
      {currentPage === 'auth' && <AuthPage onSuccess={(dest) => setCurrentPage(dest || 'home')} />}
      {currentPage === 'my-bookings' && <MyBookingsPage />}
      {currentPage === 'admin' && (profile?.role === 'Admin' ? <AdminDashboard /> : <div className="min-h-screen flex items-center justify-center"><p className="text-red-600">Access denied. Admin privileges required.</p></div>)}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'contact' && <ContactPage />}
      {currentPage === 'photo-video' && <PhotoVideoPage />}

      <Footer onNavigate={handleNavigate} />
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
