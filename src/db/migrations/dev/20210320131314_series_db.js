exports.up = function(knex) {
  
    //create table
    return knex.schema.createTable("series", function (table)
    {
        table.increments();
        table.string("name").notNullable();
        table.bool("watched").notNullable();
        table.integer("seasons_qtd").notNullable();
        table.string("sinopse").notNullable();
        table.string("category").notNullable();
        table.date("release_date").notNullable();
    });

};

exports.down = function(knex) {
  return knex.schema.dropTable("series");
};
