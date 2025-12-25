import { createContext, useContext, useState, ReactNode } from 'react';

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

// Simple local auth stub — no external provider
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{ id: string; email?: string } | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [session, setSession] = useState<any | null>(null);
  const [loading] = useState(false);

  const signUp = async (email: string, password: string, fullName: string, phone?: string) => {
    // Local stub: create a simple profile object
    const id = `local-${Date.now()}`;
    setUser({ id, email });
    const p: Profile = { id, full_name: fullName, phone: phone || null, role: 'user' };
    setProfile(p);
    setSession({ created_at: new Date().toISOString(), user: { id, email } });
    return { error: null };
  };

  const signIn = async (email: string, _password: string) => {
    // Local stub: set a temporary user/profile
    const id = `local-${Date.now()}`;
    setUser({ id, email });
    const p: Profile = { id, full_name: email.split('@')[0], phone: null, role: 'user' };
    setProfile(p);
    setSession({ created_at: new Date().toISOString(), user: { id, email } });
    return { error: null, profile: p };
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
