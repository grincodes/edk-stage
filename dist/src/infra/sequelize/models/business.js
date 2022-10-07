module.exports = function (sequelize, DataTypes) {
    const Business = sequelize.define("business", {
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
    }, {
        timestamps: true,
        underscored: true,
        tableName: "business"
    });
    Business.associate = (models) => {
        Business.hasOne(models.BusinessLocation, { as: "BusinessLocation", foreignKey: "business_id" });
        Business.hasMany(models.BusinessSubUser, { as: "BusinessSubUser", foreignKey: "business_id" }), Business.hasMany(models.BusinessDocument, { as: "BusinessDocument", foreignKey: "business_id" });
    };
    return Business;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVzaW5lc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvaW5mcmEvc2VxdWVsaXplL21vZGVscy9idXNpbmVzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQVUsU0FBUyxFQUFFLFNBQVM7SUFDN0MsTUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FDL0IsVUFBVSxFQUNWO1FBQ0UsV0FBVyxFQUFFO1lBQ1gsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLFlBQVksRUFBRSxTQUFTLENBQUMsTUFBTTtZQUM5QixTQUFTLEVBQUUsS0FBSztZQUNoQixVQUFVLEVBQUUsSUFBSTtTQUNqQjtRQUNELGFBQWEsRUFBRTtZQUNiLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUNELGFBQWEsRUFBRTtZQUNiLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUNELG9CQUFvQixFQUFFO1lBQ3BCLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtZQUN0QixTQUFTLEVBQUUsSUFBSTtTQUNoQjtRQUNELGNBQWMsRUFBRTtZQUNkLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUNELGNBQWMsRUFBRTtZQUNkLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztZQUNoQixNQUFNLEVBQUUsSUFBSTtTQUNiO1FBQ0QsYUFBYSxFQUFFO1lBQ2IsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQ3RCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsWUFBWSxFQUFFLElBQUk7U0FDbkI7UUFDRCxpQkFBaUIsRUFBRTtZQUNqQixJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDdEIsU0FBUyxFQUFFLElBQUk7WUFDZixNQUFNLEVBQUUsSUFBSTtTQUNiO1FBQ0QsZUFBZSxFQUFFO1lBQ2YsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQ3RCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsTUFBTSxFQUFFLElBQUk7U0FDYjtRQUNELGlCQUFpQixFQUFFO1lBQ2pCLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTztZQUN2QixTQUFTLEVBQUUsS0FBSztZQUNoQixZQUFZLEVBQUUsS0FBSztTQUNwQjtLQUNGLEVBQ0Q7UUFDRSxVQUFVLEVBQUUsSUFBSTtRQUNoQixXQUFXLEVBQUUsSUFBSTtRQUNqQixTQUFTLEVBQUUsVUFBVTtLQUN0QixDQUNGLENBQUE7SUFFRCxRQUFRLENBQUMsU0FBUyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUU7UUFDOUIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxFQUFFLEVBQUUsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUE7UUFDL0YsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLEVBQUUsRUFBRSxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFBO0lBQ2xNLENBQUMsQ0FBQTtJQUVELE9BQU8sUUFBUSxDQUFBO0FBQ2pCLENBQUMsQ0FBQSJ9