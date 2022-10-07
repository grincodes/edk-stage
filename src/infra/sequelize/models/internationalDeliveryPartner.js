module.exports = function (sequelize, DataTypes) {
  const InternationalDeliveryPartner = sequelize.define(
    "international_delivery_partner",
    {
      international_delivery_partner_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      international_delivery_partner_name: {
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
      tableName: "international_delivery_partner"
    }
  )

  InternationalDeliveryPartner.associate = (models) => {
    InternationalDeliveryPartner.hasOne(models.Shop, { as: "Shop", foreignKey: "international_delivery_partner_id" })
  }

  return InternationalDeliveryPartner
}
