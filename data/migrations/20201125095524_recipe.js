exports.up = knex =>
  knex.schema.createTable("recipes", tbl => {
    tbl.text("title");
    tbl.text("slug");
    tbl.integer("duration");
    tbl.text("meals");
    tbl.text("difficulty");
    tbl.text("publishDate");
    tbl.text("description");
    tbl.text("body");
  });

  // knex('recipes')
  // .where({slug: 'avocado-toast'})
  // .update({images: ['1C5A0568-1.jpg', '1C5A0568-1.jpg', '1C5A0568-1.jpg']})

exports.down = knex => knex.schema.dropTableIfExists("recipes");