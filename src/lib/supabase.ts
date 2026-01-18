import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Project = {
  id: string;
  slug: string;
  title: string;
  property_type: string;
  price: number;
  city: string;
  locality: string;
  address?: string;
  bedrooms: number;
  bathrooms: number;
  area_sqft: number;
  furnishing_status: string;
  amenities: string[];
  description?: string;
  status: string;
  listed_on: string;
  agent_name: string;
  agent_phone: string;
  agent_email: string;
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
  image6?: string;
  image7?: string;
  image8?: string;
  image9?: string;
  image10?: string;
  created_at: string;
};