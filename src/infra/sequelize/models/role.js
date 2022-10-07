module.exports = function (sequelize, DataTypes) {
  const Role = sequelize.define(
    "role",
    {
      role_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      role_user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "base_user",
          key: "base_user_id"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      },
      role: {
        type: DataTypes.STRING(250),
        allowNull: false
      }
    },
    {
      timestamps: true,
      underscored: true,
      tableName: "role"
    }
  )

  Role.associate = (models) => {
    Role.belongsTo(models.BaseUser, { as: "Role", foreignKey: "role_user_id" })
  }

  return Role
}
