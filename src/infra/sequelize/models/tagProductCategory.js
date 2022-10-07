module.exports = function (sequelize, DataTypes) {
  const TagProductCategory = sequelize.define(
    "tag_product_category",
    {
      tag_product_category_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },

      product_id: {
        type: DataTypes.UUID,
        primaryKey: false,
        references: {
          model: "product",
          key: "product_id"
        },
        onDelete: "cascade",
        onUpdate: "cascade",
        unique: "unique-category-per-product"
      },
      category_id: {
        type: DataTypes.UUID,
        primaryKey: false,
        references: {
          model: "product_category",
          key: "category_id"
        },
        onDelete: "cascade",
        onUpdate: "cascade",
        unique: "unique-category-per-product"
      }
    },
    {
      timestamps: true,
      underscored: true,
      tableName: "tag_product_category"
    }
  )

  TagProductCategory.associate = (models) => {
    TagProductCategory.belongsTo(models.Product, { foreignKey: "product_id", targetKey: "product_id", as: "Product" })
    TagProductCategory.belongsTo(models.ProductCategory, { foreignKey: "category_id", targetKey: "category_id", as: "ProductCategory" })
  }

  return TagProductCategory
}
