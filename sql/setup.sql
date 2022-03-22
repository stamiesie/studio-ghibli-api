-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS characters CASCADE;

CREATE TABLE characters (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    film TEXT NOT NULL,
    year_of_film INTEGER,
    voice_actor JSON NOT NULL,
    about TEXT NOT NULL,
    photo_url TEXT NOT NULL
);
