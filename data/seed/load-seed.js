const pool = require('../../lib/utils/pool');
const characters = require('./characters-data');

const seedTables = async () => {
  try {
    await Promise.all(
      characters.map(async (character) => {
        await pool.query(`
                    INSERT INTO characters (name, film, year_of_film, voice_actor, about, photo_url)
                    VALUES ($1, $2, $3, $4, $5, $6)
                    RETURNING *
                `,
        [
          character.name,
          character.film,
          character.year_of_film,
          character.voice_actor,
          character.about,
          character.photo_url,
        ]
        );
      })
    );
  }
  catch(err){
    console.log(err);
  }
};

seedTables();
