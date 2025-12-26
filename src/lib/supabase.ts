import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabase: any = null;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase environment variables not set. Running in offline mode.');
} else {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
}

export { supabase };

export type Database = {
  public: {
    Tables: {
      roles: {
        Row: {
          id: string;
          name: 'user' | 'Staff' | 'Manager' | 'Admin';
          description: string | null;
          created_at: string;
        };
      };
      profiles: {
        Row: {
          id: string;
          full_name: string;
          phone: string | null;
          role_id: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          full_name: string;
          phone?: string | null;
          role_id: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          full_name?: string;
          phone?: string | null;
          role_id?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      services: {
        Row: {
          id: string;
          name: string;
          description: string | null;
          category: 'hair' | 'skin' | 'nail' | 'makeup' | 'grooming' | 'spa';
          price: number;
          duration: number;
          gender: 'male' | 'female' | 'unisex';
          is_active: boolean;
          created_at: string;
        };
      };
      staff: {
        Row: {
          id: string;
          name: string;
          specialization: string | null;
          is_available: boolean;
          created_at: string;
        };
      };
      bookings: {
        Row: {
          id: string;
          user_id: string | null;
          service_id: string;
          staff_id: string | null;
          booking_date: string;
          booking_time: string;
          status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
          customer_name: string;
          customer_phone: string;
          customer_email: string;
          notes: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id?: string | null;
          service_id: string;
          staff_id?: string | null;
          booking_date: string;
          booking_time: string;
          status?: 'pending' | 'confirmed' | 'completed' | 'cancelled';
          customer_name: string;
          customer_phone: string;
          customer_email: string;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
};
