module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  },
    {
      // We're saying that we want our Burger to have a Creator
      classMethods: {
        associate: function(models) {
          // An Author (foreignKey) is required or a Post can't be made
          Burger.belongsTo(models.Creator, {
            foreignKey: {
              allowNull: false
            }
          });
        }
      }
    }
  );
  return Burger;
};