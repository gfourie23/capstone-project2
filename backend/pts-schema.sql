-- Create table for users
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(100) NOT NULL, 
  google_id VARCHAR(100)
);

-- Create table for sections
CREATE TABLE sections (
    id SERIAL PRIMARY KEY,
    handle VARCHAR(25) NOT NULL,
    name VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    thumbnail VARCHAR(255) NOT NULL,
    content_url VARCHAR(255) NOT NULL
);

-- Create table for vocabulary
CREATE TABLE vocabulary (
    id SERIAL PRIMARY KEY,
    user_id INT,
    section_handle VARCHAR(25) REFERENCES sections(handle),
    english_word VARCHAR(100) NOT NULL,
    spanish_word VARCHAR(100) NOT NULL
);