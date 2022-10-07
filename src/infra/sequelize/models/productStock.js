module.exports = function (sequelize, DataTypes) {
  const ProductStock = sequelize.define(
    "product_stock",
    {
      stock_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      product_inventory_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "product_inventory",
          key: "product_inventory_id"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      },
      units: {
        type: DataTypes.STRING,
        allowNull: false
      },

      units_sold: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
      }
    },
    {
      timestamps: true,
      underscored: true,
      tableName: "product_stock"
    }
  )

  ProductStock.associate = (models) => {
    ProductStock.belongsTo(models.ProductInventory, { foreignKey: "product_inventory_id" })
  }

  return ProductStock
}
