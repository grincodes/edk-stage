module.exports = function (sequelize, DataTypes) {
  const ProductInventory = sequelize.define(
    "product_inventory",
    {
      product_inventory_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },

      sku: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: "sku"
      },

      variant_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

      product_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "product",
          key: "product_id"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      },

      product_brand_id: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: "product_brand",
          key: "product_brand_id"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      },

      product_weight: {
        type: DataTypes.DECIMAL(8, 2),
        allowNull: false
      },

      retail_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
      },

      store_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
      },

      sale_price: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue:0
      },
      currency: {
        type: DataTypes.STRING,
        allowNull: false
      },

      is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      }
    },
    {
      timestamps: true,
      underscored: true,
      tableName: "product_inventory"
    }
  )

  ProductInventory.associate = (models) => {
    ProductInventory.belongsToMany(models.ProductAttributeValue, { as: "AttributesValues", 
    through: models.TagProductCategory, foreignKey: "product_inventory_id" }),
    ProductInventory.hasOne(models.ProductBrand, { foreignKey: "product_brand_id" })
    
    ProductInventory.hasMany(models.ProductImage, { foreignKey: "variant_name" })
    ProductInventory.belongsTo(models.ProductType, { foreignKey: "product_type_id" })
    ProductInventory.belongsTo(models.Product, { foreignKey: "product_id" })
  }

  return ProductInventory
}
