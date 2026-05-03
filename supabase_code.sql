DROP TABLE IF EXISTS characters;
DROP TABLE IF EXISTS character;

CREATE TABLE characters (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
);

CREATE TABLE character (
  id UUID PRIMARY KEY REFERENCES characters(id) ON DELETE CASCADE,
  
  name TEXT DEFAULT 'Personaje',
  level INTEGER DEFAULT 1,
  current_hp INTEGER DEFAULT 10,
);

CREATE TABLE character_stats (
  id UUID PRIMARY KEY REFERENCES character(id) ON DELETE CASCADE,
  atk INT,
  vlc INT,
  agl INT,
  int INT,
  dur INT,
  chk INT,
  pw INT
);

SELECT * FROM characters;