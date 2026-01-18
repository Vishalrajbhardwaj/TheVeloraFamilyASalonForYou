import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Profile {
  id: string;
  full_name: string;
  phone?: string | null;
  role?: 'user' | 'Staff' | 'Manager' | 'Admin' | null;
}

interface AuthContextType {
  user: { id: string; email?: string } | null;
  profile: Profile | null;
  session: any | null;
  loading: boolean;
  signUp: (email: string, password: string, fullName: string, phone?: string) => Promise<{ error: any }>;
  signIn: (email: string, password: string) => Promise<{ error: any; profile?: Profile | null }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock auth provider - no database dependency
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{ id: string; email?: string } | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [session, setSession] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Initialize with no loading since there's no database to check
    setLoading(false);
  }, []);

  const signUp = async (email: string, _password: string, fullName: string, phone?: string) => {
    // Mock signup - just create a profile
    const id = `mock-${Date.now()}`;
    const newProfile: Profile = {
      id,
      full_name: fullName,
      phone: phone || null,
      role: 'user'
    };

    setUser({ id, email });
    setProfile(newProfile);
    setSession({ created_at: new Date().toISOString(), user: { id, email } });

    return { error: null };
  };

  const signIn = async (email: string, _password: string) => {
    // Mock signin - create temporary user/profile
    const id = `mock-${Date.now()}`;
    const mockProfile: Profile = {
      id,
      full_name: email.split('@')[0],
      phone: null,
      role: 'user'
    };

    setUser({ id, email });
    setProfile(mockProfile);
    setSession({ created_at: new Date().toISOString(), user: { id, email } });

    return { error: null, profile: mockProfile };
  };

  const signOut = async () => {
    setUser(null);
    setProfile(null);
    setSession(null);
  };

  return (
    <AuthContext.Provider value={{ user, profile, session, loading, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
