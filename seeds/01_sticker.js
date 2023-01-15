const stickers = require('../stickers');


exports.seed = async function(knex) {
  await knex('sticker').del()
  await knex('sticker').insert(stickers);
};
