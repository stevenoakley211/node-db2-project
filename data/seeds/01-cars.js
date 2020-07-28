
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN:"1HGBH41JXMN109186",Make:"Honda",Model:"Civic",Mileage:1000},
        {VIN:"1HZBH41JXMN109182",Make:"Honda",Model:"Civic",Mileage:500,Transmission:"Manual"},
        {VIN:"1HZBH41JXMN109187",Make:"Honda",Model:"Accord",Mileage:1000,Transmission:"Automatic"},
        {VIN:"1HZBH41JXMN109184",Make:"Honda",Model:"Civic",Mileage:800,Transmission:"Manual"}
      ]);
    });
};
