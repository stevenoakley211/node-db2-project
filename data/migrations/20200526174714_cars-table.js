
exports.up = function(knex) {
  return knex.schema.createTable('cars',tbl=>{
      tbl.increments();
      tbl.text('VIN',17)
        .unique()
        .notNullable();
      tbl.text('Make',25)
        .notNullable()
      tbl.text('Model',100)
        .notNullable()
      tbl.integer('Mileage')
        .notNullable()
      tbl.text("Transmission",25)
      tbl.text('Status',100)       
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
