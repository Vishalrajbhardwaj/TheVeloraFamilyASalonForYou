/*
  # Fix Function Search Path Warnings
  
  This migration fixes the mutable search_path warning for two functions:
  - handle_new_user: Automatically creates user profile on signup
  - update_updated_at: Updates the updated_at timestamp on table changes
  
  By adding `SET search_path = public` to the function definitions, we ensure:
  1. The functions use a consistent and secure search path
  2. No mutable search_path warnings
  3. Better security posture for the database
  4. Explicit control over which schema is used
*/

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, phone, role)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'phone', ''),
    'user'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

CREATE OR REPLACE FUNCTION public.update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;