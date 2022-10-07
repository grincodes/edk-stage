module.exports = function (sequelize, DataTypes) {
  const ProductAttributeValue = sequelize.define(
    "product_attribute_value",
    {
      attribute_value_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      attribute_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "prdouct_attribute",
          key: "attribute_id"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      },
      attribute_value: {
        type: DataTypes.STRING,
        allowNull: false
      },
      attribute_value_sequence: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      timestamps: true,
      underscored: true,
      tableName: "product_attribute_value"
    }
  )

  ProductAttributeValue.associate = (models) => {

    ProductAttributeValue.belongsTo(models.ProductAttribute, { foreignKey: "attribute_id" })

    ProductAttributeValue.belongsToMany(models.ProductInventory, { as: 'ProductInventory',
    through: models.TagProductAttributeValue, foreignKey: 'attribute_value_id'})
  }

  return ProductAttributeValue
}
