module.exports = function(sequelize, DataTypes) {
  var Creator = sequelize.define("Creator", {
    // Giving the Creator model a name of type STRING
    name: DataTypes.STRING
  },
    // Here we'll pass a second "classMethods" object into the define method
    // This is for any additional configuration we want to give our models
    {
      // We're saying that we want our Creator to have Burgers
      classMethods: {
        associate: function(models) {
          // Associating Creator with Burgers
          // When an Creator is deleted, also delete any associated Burgers
          Creator.hasMany(models.Burger, {
            onDelete: "cascade"
          });
        }
      }
    }
  );
  return Creator;
};