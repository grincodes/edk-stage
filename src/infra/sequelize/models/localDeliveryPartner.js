module.exports = function (sequelize, DataTypes) {
  const LocalDeliveryPartner = sequelize.define(
    "local_delivery_partner",
    {
      local_delivery_partner_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      local_delivery_partner_name: {
        type: DataTypes.STRING,
        allowNull: false
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
      tableName: "local_delivery_partner"
    }
  )

  LocalDeliveryPartner.associate = (models) => {
    LocalDeliveryPartner.hasOne(models.Shop, { as: "Shop", foreignKey: "local_delivery_partner_id" })
  }

  return LocalDeliveryPartner
}
