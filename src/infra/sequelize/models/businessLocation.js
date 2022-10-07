module.exports = function (sequelize, DataTypes) {
  const BusinessLocation = sequelize.define(
    "business_location",
    {
      business_location_id: {
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
      address: {
        type: DataTypes.STRING,
        allowNull: false
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false
      },
      country: {
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

  BusinessLocation.associate = (models) => {
    BusinessLocation.belongsTo(models.Business, { foreignKey: "business_id" })
  }

  return BusinessLocation
}
