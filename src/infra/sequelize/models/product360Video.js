module.exports = function (sequelize, DataTypes) {
  const Product360Video = sequelize.define(
    "product_360_video",
    {
      v360_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      product_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "product",
          key: "product_id"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      timestamps: true,
      underscored: true,
      tableName: "product_360_video"
    }
  )

  Product360Video.associate = (models) => {
    Product360Video.belongsTo(models.Product, { foreignKey: "product_id" })
  }

  return Product360Video
}
