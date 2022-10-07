module.exports = function (sequelize, DataTypes) {
  const ProductImage = sequelize.define(
    "product_image",
    {
      image_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
   
      image_url: {
        type: DataTypes.STRING,
        allowNull: false
      },

      alt_text: {
        type: DataTypes.STRING(250),
        allowNull: false
      },

      thumbnail_url: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
      timestamps: true,
      underscored: true,
      tableName: "product_image"
    }
  )

  ProductImage.associate = (models) => {
     ProductImage.belongsTo(models.ProductInventory, 
      { target: "variant_name", foreignKey:'tag_variant_name' })
  }

  return ProductImage
}
