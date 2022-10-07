module.exports = function (sequelize, DataTypes) {
  const Product = sequelize.define(
    "product",
    {
      product_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },

      product_name: {
        type: DataTypes.STRING,
        allowNull: false
      },

      product_description: {
        type: DataTypes.STRING,
        allowNull: false
      },

      category_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "product_category",
          key: "category_id"
        },
        onUpdate: "cascade"
      },

      product_slug: {
        type: DataTypes.STRING(250),
        allowNull: false
      },

      product_web_id: {
        type: DataTypes.STRING,
        allowNull: false
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

      is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    },
    {
      timestamps: true,
      underscored: true,
      tableName: "product"
    }
  )

  Product.associate = (models) => {
    Product.hasOne(models.Product360Video, { foreignKey: "product_id" })
    Product.belongsTo(models.ProductCategory, { as: "ProductCategories", foreignKey: "category_id" })
    Product.belongsTo(models.Shop, { foreignKey: "shop_id" })
  }

  return Product
}
