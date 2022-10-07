module.exports = function (sequelize, DataTypes) {
  const ShopCategory = sequelize.define(
    "shop_category",
    {
      shop_category_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      shop_category_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      shop_category_slug: {
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
      tableName: "shop_category"
    }
  )

  ShopCategory.associate = (models) => {
    ShopCategory.hasMany(models.Shop, { as: "Shop", foreignKey: "shop_category_id" })
  }

  return ShopCategory
}
