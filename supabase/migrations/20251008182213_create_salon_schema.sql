/*
  # The Velora Family Salon - Complete Database Schema

  ## Overview
  Complete database schema for a modern unisex salon booking system with user authentication,
  service management, booking system, and admin capabilities.

  ## New Tables

  ### 1. profiles
  - Extends auth.users with additional user information
  - `id` (uuid, references auth.users)
  - `full_name` (text)
  - `phone` (text)
  - `role` (text) - 'user' or 'admin'
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 2. services
  - Salon services offered
  - `id` (uuid, primary key)
  - `name` (text) - service name
  - `description` (text)
  - `category` (text) - 'hair', 'skin', 'nail', 'makeup', 'grooming'
  - `price` (numeric)
  - `duration` (integer) - in minutes
  - `gender` (text) - 'male', 'female', 'unisex'
  - `is_active` (boolean)
  - `created_at` (timestamptz)

  ### 3. staff
  - Salon staff members
  - `id` (uuid, primary key)
  - `name` (text)
  - `specialization` (text)
  - `is_available` (boolean)
  - `created_at` (timestamptz)

  ### 4. bookings
  - Customer bookings
  - `id` (uuid, primary key)
  - `user_id` (uuid, references profiles)
  - `service_id` (uuid, references services)
  - `staff_id` (uuid, references staff)
  - `booking_date` (date)
  - `booking_time` (time)
  - `status` (text) - 'pending', 'confirmed', 'completed', 'cancelled'
  - `customer_name` (text)
  - `customer_phone` (text)
  - `customer_email` (text)
  - `notes` (text)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ## Security
  - Enable RLS on all tables
  - Users can read their own profile and bookings
  - Admins can manage everything
  - Public can view active services
*/

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  full_name text NOT NULL,
  phone text,
  role text NOT NULL DEFAULT 'user' CHECK (role IN ('user', 'admin')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  category text NOT NULL CHECK (category IN ('hair', 'skin', 'nail', 'makeup', 'grooming', 'spa')),
  price numeric NOT NULL,
  duration integer NOT NULL DEFAULT 30,
  gender text NOT NULL DEFAULT 'unisex' CHECK (gender IN ('male', 'female', 'unisex')),
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE services ENABLE ROW LEVEL SECURITY;

-- Create staff table
CREATE TABLE IF NOT EXISTS staff (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  specialization text,
  is_available boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE staff ENABLE ROW LEVEL SECURITY;

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE SET NULL,
  service_id uuid REFERENCES services(id) ON DELETE CASCADE NOT NULL,
  staff_id uuid REFERENCES staff(id) ON DELETE SET NULL,
  booking_date date NOT NULL,
  booking_time time NOT NULL,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  customer_name text NOT NULL,
  customer_phone text NOT NULL,
  customer_email text NOT NULL,
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Admins can view all profiles"
  ON profiles FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

-- RLS Policies for services
CREATE POLICY "Anyone can view active services"
  ON services FOR SELECT
  USING (is_active = true);

CREATE POLICY "Admins can manage services"
  ON services FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

-- RLS Policies for staff
CREATE POLICY "Anyone can view available staff"
  ON staff FOR SELECT
  USING (is_available = true);

CREATE POLICY "Admins can manage staff"
  ON staff FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

-- RLS Policies for bookings
CREATE POLICY "Users can view own bookings"
  ON bookings FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can create bookings"
  ON bookings FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update own bookings"
  ON bookings FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Admins can view all bookings"
  ON bookings FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

CREATE POLICY "Admins can manage all bookings"
  ON bookings FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

-- Insert sample services
INSERT INTO services (name, description, category, price, duration, gender, is_active) VALUES
  ('Men Haircut', 'Professional haircut and styling for men', 'hair', 300, 30, 'male', true),
  ('Women Haircut', 'Expert haircut and styling for women', 'hair', 500, 45, 'female', true),
  ('Hair Coloring', 'Premium hair coloring services', 'hair', 1500, 120, 'unisex', true),
  ('Hair Spa', 'Rejuvenating hair spa treatment', 'spa', 800, 60, 'unisex', true),
  ('Facial Treatment', 'Deep cleansing facial for glowing skin', 'skin', 700, 45, 'unisex', true),
  ('Bridal Makeup', 'Complete bridal makeup package', 'makeup', 5000, 180, 'female', true),
  ('Party Makeup', 'Glamorous party makeup', 'makeup', 2000, 60, 'female', true),
  ('Manicure', 'Professional nail care and polish', 'nail', 400, 30, 'unisex', true),
  ('Pedicure', 'Relaxing foot care treatment', 'nail', 500, 45, 'unisex', true),
  ('Beard Styling', 'Expert beard trim and styling', 'grooming', 200, 20, 'male', true),
  ('Threading', 'Precision eyebrow and facial threading', 'grooming', 100, 15, 'unisex', true),
  ('Waxing - Full Body', 'Complete body waxing service', 'grooming', 1500, 90, 'unisex', true)
ON CONFLICT DO NOTHING;

-- Insert sample staff
INSERT INTO staff (name, specialization, is_available) VALUES
  ('Priya Sharma', 'Bridal Makeup & Hair Styling', true),
  ('Rajesh Kumar', 'Men Grooming Specialist', true),
  ('Sneha Patel', 'Hair Coloring Expert', true),
  ('Amit Singh', 'Unisex Hair Stylist', true)
ON CONFLICT DO NOTHING;

-- Function to automatically create profile on user signup
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO profiles (id, full_name, phone, role)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'phone', ''),
    'user'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on user signup
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at
DROP TRIGGER IF EXISTS update_profiles_updated_at ON profiles;
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

DROP TRIGGER IF EXISTS update_bookings_updated_at ON bookings;
CREATE TRIGGER update_bookings_updated_at
  BEFORE UPDATE ON bookings
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
