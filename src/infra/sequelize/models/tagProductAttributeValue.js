module.exports = function (sequelize, DataTypes) {
  const TagProductAttributeValue = sequelize.define(
    "tag_product_attribute_value",
    {
      tag_product_attr_value_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      product_inventory_id: {
        type: DataTypes.UUID,
        primaryKey: false,
        references: {
          model: "product_inventory",
          key: "product_inventory_id"
        },
        onDelete: "cascade",
        onUpdate: "cascade",
        unique: "unique-product-per-attributes"
      },
      
      attribute_value_id: {
        type: DataTypes.UUID,
        primaryKey: false,
        references: {
          model: "product_attribute_value",
          key: "attribute_value_id"
        },
        onDelete: "cascade",
        onUpdate: "cascade",
        unique: "unique-product-per-attributes"
      }
    },
    {
      timestamps: true,
      underscored: true,
      tableName: "tag_product_attribute_value"
    }
  )

  TagProductAttributeValue.associate = (models) => {
    TagProductAttributeValue.belongsTo(models.ProductInventory, { foreignKey: "product_inventory_id", as: "ProductInventory" })
    TagProductAttributeValue.belongsTo(models.ProductAttributeValue, { foreignKey: "attribute_value_id", as: "ProductAttributeValue" })
  }

  return TagProductAttributeValue
}
