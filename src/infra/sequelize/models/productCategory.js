module.exports = function (sequelize, DataTypes) {
  const ProductCategory = sequelize.define(
    "product_category",
    {
      category_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },

      product_type_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "product_type",
          key: "product_type_id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },

      category_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      category_slug: {
        type: DataTypes.STRING(250),
        allowNull: false,
        unique: true,
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      timestamps: true,
      underscored: true,
      tableName: "product_category",
    },
  )

  ProductCategory.associate = (models) => {
      ProductCategory.hasMany(models.ProductSubCategory, { as: "ProductSubCategory", foreignKey: "category_id" }),
      ProductCategory.belongsTo(models.ProductType, { foreignKey: "product_type_id" }),
      ProductCategory.hasMany(models.Product, { as: "Product", foreignKey: "category_id" })
  }

  return ProductCategory
}
