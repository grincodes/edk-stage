module.exports = function (sequelize, DataTypes) {
  const ShopLocation = sequelize.define(
    "shop_location",
    {
      shop_location_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },

      shop_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "shop",
          key: "shop_id"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lng: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      lat: {
        type: DataTypes.FLOAT,
        allowNull: false
      }
    },
    {
      timestamps: true,
      underscored: true,
      tableName: "shop_location"
    }
  )

  ShopLocation.associate = (models) => {
    ShopLocation.belongsTo(models.Shop, { foreignKey: "shop_id" })
  }

  return ShopLocation
}
