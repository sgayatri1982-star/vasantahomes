/*
  # Create projects table for property listings

  1. New Tables
    - `projects`
      - `id` (uuid, primary key)
      - `slug` (text, unique) - for dynamic routing
      - `title` (text) - property title
      - `property_type` (text) - Flat, Villa, Plot, Farmhouse, Commercial
      - `price` (numeric) - property price
      - `city` (text) - city location
      - `locality` (text) - specific locality
      - `address` (text) - full address
      - `bedrooms` (int) - number of bedrooms
      - `bathrooms` (int) - number of bathrooms
      - `area_sqft` (numeric) - area in square feet
      - `furnishing_status` (text) - furnishing status
      - `amenities` (text[]) - array of amenities
      - `description` (text) - property description
      - `status` (text) - Available, Sold, Under Construction
      - `listed_on` (timestamptz) - listing date
      - `agent_name` (text) - agent name
      - `agent_phone` (text) - agent phone
      - `agent_email` (text) - agent email
      - `image1` to `image10` (text) - property images
      - `created_at` (timestamptz) - creation timestamp

  2. Security
    - Enable RLS on `projects` table
    - Add policy for public read access
    - Add policy for authenticated users to manage projects
*/

CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  property_type text NOT NULL,
  price numeric NOT NULL,
  city text NOT NULL,
  locality text NOT NULL,
  address text,
  bedrooms int DEFAULT 0,
  bathrooms int DEFAULT 0,
  area_sqft numeric NOT NULL,
  furnishing_status text DEFAULT 'Unfurnished',
  amenities text[] DEFAULT '{}',
  description text,
  status text DEFAULT 'Available',
  listed_on timestamptz DEFAULT now(),
  agent_name text NOT NULL,
  agent_phone text NOT NULL,
  agent_email text NOT NULL,
  image1 text,
  image2 text,
  image3 text,
  image4 text,
  image5 text,
  image6 text,
  image7 text,
  image8 text,
  image9 text,
  image10 text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Allow public read access to projects
CREATE POLICY "Projects are publicly readable"
  ON projects
  FOR SELECT
  TO public
  USING (true);

-- Allow authenticated users to insert/update/delete projects
CREATE POLICY "Authenticated users can manage projects"
  ON projects
  FOR ALL
  TO authenticated
  USING (true);

-- Insert sample data
INSERT INTO projects (
  slug, title, property_type, price, city, locality, address,
  bedrooms, bathrooms, area_sqft, furnishing_status, amenities, description, status,
  agent_name, agent_phone, agent_email, image1, image2, image3
) VALUES 
(
  'himalayan-view-villa-nainital',
  'Himalayan View Villa',
  'Villa',
  3500000,
  'Nainital',
  'Mallital',
  'Mallital Road, Near Naini Lake, Nainital, Uttarakhand',
  3,
  3,
  2500,
  'Semi-Furnished',
  ARRAY['Lake View', 'Mountain View', 'Garden', 'Parking', 'Security', 'Power Backup'],
  'Stunning 3BHK villa with panoramic lake and mountain views. Located in the heart of Nainital with easy access to Mall Road and major attractions. Perfect for luxury living or holiday home investment.',
  'Available',
  'Rajesh Kumar',
  '+91 98731 60180',
  'rajesh@vasantahomes.com',
  'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
),
(
  'premium-farmhouse-haldwani',
  'Premium Farmhouse Estate',
  'Farmhouse',
  2800000,
  'Haldwani',
  'Kathgodam Road',
  'Kathgodam Road, Haldwani, Uttarakhand',
  4,
  3,
  3200,
  'Furnished',
  ARRAY['Mountain View', 'Organic Garden', 'Swimming Pool', 'Parking', 'Security', 'Gym'],
  'Luxurious 4BHK farmhouse with organic gardens and mountain views. Perfect for those seeking peaceful living with modern amenities. Includes swimming pool and recreational facilities.',
  'Available',
  'Priya Sharma',
  '+91 98731 60181',
  'priya@vasantahomes.com',
  'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
),
(
  'mountain-view-plots-mukteshwar',
  'Mountain View Premium Plots',
  'Plot',
  1200000,
  'Mukteshwar',
  'Temple Road',
  'Mukteshwar Temple Road, Mukteshwar, Uttarakhand',
  0,
  0,
  2700,
  'Unfurnished',
  ARRAY['Mountain View', 'Legal Freehold', 'Road Connectivity', 'Electricity'],
  'Premium freehold plots with spectacular 360-degree Himalayan views. Perfect for building your dream mountain home. Clear legal titles and excellent connectivity.',
  'Available',
  'Amit Singh',
  '+91 98731 60182',
  'amit@vasantahomes.com',
  'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
),
(
  'luxury-flat-bhimtal',
  'Luxury Lake View Flat',
  'Flat',
  1800000,
  'Bhimtal',
  'Lake Side',
  'Lake Side Road, Bhimtal, Uttarakhand',
  2,
  2,
  1400,
  'Fully Furnished',
  ARRAY['Lake View', 'Balcony', 'Parking', 'Security', 'Lift', 'Power Backup'],
  'Beautiful 2BHK flat with direct lake views from Bhimtal lake. Fully furnished with modern amenities. Perfect for holiday home or rental investment.',
  'Available',
  'Sunita Devi',
  '+91 98731 60183',
  'sunita@vasantahomes.com',
  'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
),
(
  'heritage-villa-champawat',
  'Heritage Mountain Villa',
  'Villa',
  2200000,
  'Champawat',
  'Temple Area',
  'Near Baleshwar Temple, Champawat, Uttarakhand',
  3,
  2,
  2000,
  'Semi-Furnished',
  ARRAY['Heritage Location', 'Mountain View', 'Garden', 'Parking', 'Temple Proximity'],
  'Charming heritage-style villa near ancient temples. Combines traditional architecture with modern comforts. Perfect for those seeking cultural richness and natural beauty.',
  'Available',
  'Mohan Joshi',
  '+91 98731 60184',
  'mohan@vasantahomes.com',
  'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
);