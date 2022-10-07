module.exports = function (sequelize, DataTypes) {
    const BaseUser = sequelize.define("base_user", {
        base_user_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        first_name: {
            type: DataTypes.STRING(250),
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING(250),
            allowNull: false
        },
        user_email: {
            type: DataTypes.STRING(250),
            allowNull: false,
            unique: true
        },
        user_password: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null
        },
        profile_picture: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true
        },
        facebook_id: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true
        },
        google_id: {
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
        tableName: "base_user",
        indexes: [{ unique: true, fields: ["user_email"] }]
    });
    BaseUser.associate = (models) => {
        BaseUser.hasMany(models.Role, { as: "Role", foreignKey: "role_user_id" });
    };
    return BaseUser;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZVVzZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvaW5mcmEvc2VxdWVsaXplL21vZGVscy9iYXNlVXNlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQVUsU0FBUyxFQUFFLFNBQVM7SUFDN0MsTUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FDL0IsV0FBVyxFQUNYO1FBQ0UsWUFBWSxFQUFFO1lBQ1osSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLFlBQVksRUFBRSxTQUFTLENBQUMsTUFBTTtZQUM5QixTQUFTLEVBQUUsS0FBSztZQUNoQixVQUFVLEVBQUUsSUFBSTtTQUNqQjtRQUNELFVBQVUsRUFBRTtZQUNWLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUNELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUNELFVBQVUsRUFBRTtZQUNWLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztZQUNoQixNQUFNLEVBQUUsSUFBSTtTQUNiO1FBQ0QsYUFBYSxFQUFFO1lBQ2IsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQ3RCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsWUFBWSxFQUFFLElBQUk7U0FDbkI7UUFDRCxlQUFlLEVBQUU7WUFDZixJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDdEIsU0FBUyxFQUFFLElBQUk7WUFDZixNQUFNLEVBQUUsSUFBSTtTQUNiO1FBQ0QsV0FBVyxFQUFFO1lBQ1gsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQ3RCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsTUFBTSxFQUFFLElBQUk7U0FDYjtRQUNELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtZQUN0QixTQUFTLEVBQUUsSUFBSTtZQUNmLE1BQU0sRUFBRSxJQUFJO1NBQ2I7UUFDRCxpQkFBaUIsRUFBRTtZQUNqQixJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU87WUFDdkIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsWUFBWSxFQUFFLEtBQUs7U0FDcEI7S0FDRixFQUNEO1FBQ0UsVUFBVSxFQUFFLElBQUk7UUFDaEIsV0FBVyxFQUFFLElBQUk7UUFDakIsU0FBUyxFQUFFLFdBQVc7UUFDdEIsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUM7S0FDcEQsQ0FDRixDQUFBO0lBRUQsUUFBUSxDQUFDLFNBQVMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQzlCLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxDQUFDLENBQUE7SUFDM0UsQ0FBQyxDQUFBO0lBRUQsT0FBTyxRQUFRLENBQUE7QUFDakIsQ0FBQyxDQUFBIn0=