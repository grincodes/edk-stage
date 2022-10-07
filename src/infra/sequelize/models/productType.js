module.exports = function (sequelize, DataTypes) {
  const ProductType = sequelize.define(
    "product_type",
    {
      product_type_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },

      product_type_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      underscored: true,
      tableName: "product_type",
    },
  )

  ProductType.associate = (models) => {
    ProductType.hasMany(models.ProductCategory, { as: "ProductCategories", foreignKey: "product_type_id" })
    // ProductType.hasOne(models.ProductInventory, { as: "ProductInventory", foreignKey: "product_type_id" })
  }

  return ProductType
}
