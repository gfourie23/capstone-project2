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
    section_handle VARCHAR(25) REFERENCES sections(handle),
    english_word VARCHAR(100) NOT NULL,
    spanish_word VARCHAR(100) NOT NULL
);