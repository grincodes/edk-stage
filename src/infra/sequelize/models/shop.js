module.exports = function (sequelize, DataTypes) {
  const Shop = sequelize.define(
    "shop",
    {
      shop_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },

      shop_category_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "shop_category",
          key: "shop_category_id"
        },
        onUpdate: "cascade"
      },

      shop_name: {
        type: DataTypes.STRING(250),
        allowNull: false
      },
      shop_email: {
        type: DataTypes.STRING(250),
        allowNull: false,
        unique: true
      },
      shop_phone: {
        type: DataTypes.STRING(250),
        allowNull: false,
        unique: true
      },
      shop_logo: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
      },
      shop_owner_type: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      shop_owner_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "base_user",
          key: "base_user_id"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      },

      local_delivery_partner_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "local_delivery_partner",
          key: "local_delivery_partner_id"
        },
        onUpdate: "cascade"
      },

      international_delivery_partner_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "international_delivery_partner",
          key: "international_delivery_partner_id"
        },
        onUpdate: "cascade"
      },

      is_verified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    },
    {
      timestamps: true,
      underscored: true,
      tableName: "shop"
    }
  )

  Shop.associate = (models) => {
    Shop.hasOne(models.ShopLocation, { as: "ShopLocation", foreignKey: "shop_id" }),
      // Shop.hasMany(models.ShopLogistics, { as: 'ShopLogistics', foreignKey: 'shop_id' }),
      Shop.hasMany(models.ShopDocument, { as: "ShopDocument", foreignKey: "shop_id" }),
      Shop.hasMany(models.Product, { as: "Product", foreignKey: "shop_id" }),
      Shop.belongsTo(models.ShopCategory, { foreignKey: "shop_category_id" })
    Shop.belongsTo(models.LocalDeliveryPartner, { as: "LocalDeliveryPartner", foreignKey: "local_delivery_partner_id" })
    Shop.belongsTo(models.InternationalDeliveryPartner, { as: "InternationalDeliveryPartner", foreignKey: "international_delivery_partner_id" })
  }

  return Shop
}
