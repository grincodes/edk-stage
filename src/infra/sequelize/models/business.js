module.exports = function (sequelize, DataTypes) {
  const Business = sequelize.define(
    "business",
    {
      business_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      business_name: {
        type: DataTypes.STRING(250),
        allowNull: false
      },
      business_type: {
        type: DataTypes.STRING(250),
        allowNull: false
      },
      business_description: {
        type: DataTypes.STRING,
        allowNull: true
      },
      business_email: {
        type: DataTypes.STRING(250),
        allowNull: false
      },
      business_phone: {
        type: DataTypes.STRING(250),
        allowNull: false,
        unique: true
      },
      business_logo: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
      },
      business_industry: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
      },
      business_tax_id: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
      },
      is_email_verified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    },
    {
      timestamps: true,
      underscored: true,
      tableName: "business"
    }
  )

  Business.associate = (models) => {
    Business.hasOne(models.BusinessLocation, { as: "BusinessLocation", foreignKey: "business_id" })
    Business.hasMany(models.BusinessSubUser, { as: "BusinessSubUser", foreignKey: "business_id" }), Business.hasMany(models.BusinessDocument, { as: "BusinessDocument", foreignKey: "business_id" })
  }

  return Business
}
