module.exports = function (sequelize, DataTypes) {
    const ShopperAddress = sequelize.define(
      "shopper_address",
      {
        shopper_address_id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true
        },
  
        shopper_id: {
          type: DataTypes.UUID,
          allowNull: false,
          references: {
            model: "shopper",
            key: "shopper_id"
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
        },
        is_default:{
            type:DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue: false
        }
      },
      {
        timestamps: true,
        underscored: true,
        tableName: "shopper_address"
      }
    )
  
    ShopperAddress.associate = (models) => {
        ShopperAddress.belongsTo(models.Shopper, { foreignKey: "shopper_id" })
    }
  
    return ShopperAddress
  }
  