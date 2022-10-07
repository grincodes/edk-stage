module.exports = function (sequelize, DataTypes) {
  const ProductSubCategory = sequelize.define(
    "product_sub_category",
    {
      subcategory_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      category_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "proudct_category",
          key: "category_id"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      },
      subcategory_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      subcategory_slug: {
        type: DataTypes.STRING(250),
        allowNull: false,
        unique: true
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
      tableName: "product_sub_category"
    }
  )

  ProductSubCategory.associate = (models) => {
    ProductSubCategory.belongsTo(models.ProductCategory, { foreignKey: "category_id" })
  }

  return ProductSubCategory
}
