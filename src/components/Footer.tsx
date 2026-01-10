import { MapPin, Clock, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer = ({ onNavigate }: FooterProps) => {
  return (
    <footer className="bg-gradient-to-r from-amber-600 via-pink-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">The Velora</h3>
            <p className="text-white/80 mb-4">
              Premium unisex salon in Jabalpur, providing exceptional beauty and grooming services for the entire family.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.253 14.894 3.762 13.743 3.762 12.446s.49-2.448 1.364-3.323c.875-.875 2.026-1.365 3.323-1.365s2.448.49 3.323 1.365c.875.875 1.365 2.026 1.365 3.323s-.49 2.448-1.365 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718 0c-.99 0-1.896-.363-2.599-.966-.703-.603-1.106-1.41-1.106-2.401 0-.99.403-1.797 1.106-2.401.703-.603 1.609-.966 2.599-.966s1.896.363 2.599.966c.703.604 1.106 1.411 1.106 2.401 0 .99-.403 1.798-1.106 2.401-.703.603-1.609.966-2.599.966z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => onNavigate('home')} className="text-white/80 hover:text-white transition-colors text-left">Home</button></li>
              <li><button onClick={() => onNavigate('services')} className="text-white/80 hover:text-white transition-colors text-left">Services</button></li>
              <li><button onClick={() => onNavigate('about')} className="text-white/80 hover:text-white transition-colors text-left">About Us</button></li>
              <li><button onClick={() => onNavigate('contact')} className="text-white/80 hover:text-white transition-colors text-left">Contact</button></li>
              <li><button onClick={() => onNavigate('booking')} className="text-white/80 hover:text-white transition-colors text-left">Book Now</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><button onClick={() => onNavigate('services')} className="text-white/80 hover:text-white transition-colors text-left">Hair Styling</button></li>
              <li><button onClick={() => onNavigate('services')} className="text-white/80 hover:text-white transition-colors text-left">Makeup Services</button></li>
              <li><button onClick={() => onNavigate('services')} className="text-white/80 hover:text-white transition-colors text-left">Spa Treatments</button></li>
              <li><button onClick={() => onNavigate('services')} className="text-white/80 hover:text-white transition-colors text-left">Bridal Packages</button></li>
              <li><button onClick={() => onNavigate('services')} className="text-white/80 hover:text-white transition-colors text-left">Men's Grooming</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-white/80" />
                <span className="text-white/80">Gorakhpur Main Road, Near Azad Chowk, Jabalpur</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-white/80" />
                <span className="text-white/80">083053 35548</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-white/80" />
                <span className="text-white/80">11:00 AM - 9:00 PM (All Days)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/80">
            © 2025 The Velora. All rights reserved. | Made By <a href="https://www.linkedin.com/in/vishal-raj-bhardwaj/">Vishal Raj Bhardwaj </a>         </p>
        </div>
      </div>
    </footer>
  );
};
