module.exports = function (sequelize, DataTypes) {
    const Shopper = sequelize.define(
      "shopper",
      {
        shopper_id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true
        },
  
        shopper_username: {
          type: DataTypes.STRING(250),
          allowNull: false,
          unique:true
        },

        shopper_phone: {
          type: DataTypes.STRING(250),
          allowNull: false,
          unique: true
        },

        shopper_dob: {
            type: DataTypes.DATE,
            allowNull: false,
            unique: true
          },

        shopper_user_id: {
          type: DataTypes.UUID,
          allowNull: false,
          references: {
            model: "base_user",
            key: "base_user_id"
          },
          onDelete: "cascade",
          onUpdate: "cascade"
        },

      },
      {
        timestamps: true,
        underscored: true,
        tableName: "shopper"
      }
    )
  
    Shopper.associate = (models) => {
       Shopper.hasMany(models.ShopperAddress, { as: "ShopperAddress", foreignKey: "shopper_id" })
       //many to many with intrests
      //  Shop.hasMany(models.ShopperIntrests, { as: "Intrests", foreignKey: "shop_id" })

    }
  
    return Shopper
  }
  