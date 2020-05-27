
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN:"1HGBH41JXMN109186",Make:"Honda",Model:"Civic",Mileage:1000},
        {VIN:"1HZBH41JXMN109186",Make:"Honda",Model:"Civic",Mileage:500,Transmission:"Manual"}
      ]);
    });
};
