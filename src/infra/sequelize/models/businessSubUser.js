module.exports = function (sequelize, DataTypes) {
  const BusinessSubUser = sequelize.define(
    "business_sub_user",
    {
      business_sub_user_id: {
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
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "user",
          key: "user_id"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      }
    },
    {
      timestamps: true,
      underscored: true,
      tableName: "business_sub_user"
    }
  )

  BusinessSubUser.associate = (models) => {
    BusinessSubUser.belongsTo(models.Business, { foreignKey: "business_id" })
    BusinessSubUser.belongsTo(models.BaseUser, { foreignKey: "user_id" })
  }

  return BusinessSubUser
}
