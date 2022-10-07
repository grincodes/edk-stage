module.exports = function (sequelize, DataTypes) {
  const ShopDocument = sequelize.define(
    "shop_document",
    {
      shop_document_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },

      shop_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "shop",
          key: "shop_id"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      },
      document_url: {
        type: DataTypes.STRING,
        allowNull: false
      },
      document_type: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      timestamps: true,
      underscored: true,
      tableName: "shop_document"
    }
  )

  ShopDocument.associate = (models) => {
    ShopDocument.belongsTo(models.Shop, { foreignKey: "shop_id" })
  }

  return ShopDocument
}
