const pool = require('../utils/pool');

module.exports = class Character {
  id;
  name;
  film;
  year_of_film;
  voice_actor;
  about;
  photo_url;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.film = row.film;
    this.yearOfFilm = row.year_of_film;
    this.voiceActor = row.voice_actor;
    this.about = row.about;
    this.photoUrl = row.photo_url;
  }

  static async getAllCharacters() {
    const { rows } = await pool.query(
      'SELECT * FROM characters ORDER BY id',
      []
    );
    return rows.map((row) => new Character(row));
  }
};
