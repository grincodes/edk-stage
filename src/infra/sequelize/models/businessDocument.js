module.exports = function (sequelize, DataTypes) {
  const BusinessDocument = sequelize.define(
    "business_document",
    {
      business_document_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },

      business_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "business",
          key: "business_id"
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
      tableName: "business_document"
    }
  )

  BusinessDocument.associate = (models) => {
    BusinessDocument.belongsTo(models.Business, { foreignKey: "buisness_id" })
  }

  return BusinessDocument
}
