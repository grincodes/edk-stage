module.exports = function (sequelize, DataTypes) {
  const ProductBrand = sequelize.define(
    "product_brand",
    {
      product_brand_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      product_brand_name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      timestamps: true,
      underscored: true,
      tableName: "product_brand"
    }
  )

  ProductBrand.associate = (models) => {
    ProductBrand.hasMany(models.ProductInventory, { as: "ProductInventory", foreignKey: "product_brand_id" })
  }

  return ProductBrand
}
