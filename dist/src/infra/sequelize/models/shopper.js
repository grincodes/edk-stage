module.exports = function (sequelize, DataTypes) {
    const Shopper = sequelize.define("shopper", {
        shopper_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        shopper_username: {
            type: DataTypes.STRING(250),
            allowNull: false,
            unique: true
        },
        shopper_phone: {
            type: DataTypes.STRING(250),
            allowNull: false,
            unique: true
        },
        shopper_dob: {
            type: DataTypes.DATE,
            allowNull: false,
            unique: true
        },
        shopper_user_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: "base_user",
                key: "base_user_id"
            },
            onDelete: "cascade",
            onUpdate: "cascade"
        },
    }, {
        timestamps: true,
        underscored: true,
        tableName: "shopper"
    });
    Shopper.associate = (models) => {
        Shopper.hasMany(models.ShopperAddress, { as: "ShopperAddress", foreignKey: "shopper_id" });
        //many to many with intrests
        //  Shop.hasMany(models.ShopperIntrests, { as: "Intrests", foreignKey: "shop_id" })
    };
    return Shopper;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYS9zZXF1ZWxpemUvbW9kZWxzL3Nob3BwZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLFNBQVMsRUFBRSxTQUFTO0lBQzNDLE1BQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQzlCLFNBQVMsRUFDVDtRQUNFLFVBQVUsRUFBRTtZQUNWLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixZQUFZLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDOUIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFBVSxFQUFFLElBQUk7U0FDakI7UUFFRCxnQkFBZ0IsRUFBRTtZQUNoQixJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDM0IsU0FBUyxFQUFFLEtBQUs7WUFDaEIsTUFBTSxFQUFDLElBQUk7U0FDWjtRQUVELGFBQWEsRUFBRTtZQUNiLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztZQUNoQixNQUFNLEVBQUUsSUFBSTtTQUNiO1FBRUQsV0FBVyxFQUFFO1lBQ1QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLE1BQU0sRUFBRSxJQUFJO1NBQ2I7UUFFSCxlQUFlLEVBQUU7WUFDZixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFBVSxFQUFFO2dCQUNWLEtBQUssRUFBRSxXQUFXO2dCQUNsQixHQUFHLEVBQUUsY0FBYzthQUNwQjtZQUNELFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1NBQ3BCO0tBRUYsRUFDRDtRQUNFLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLFdBQVcsRUFBRSxJQUFJO1FBQ2pCLFNBQVMsRUFBRSxTQUFTO0tBQ3JCLENBQ0YsQ0FBQTtJQUVELE9BQU8sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUM1QixPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsRUFBRSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUE7UUFDMUYsNEJBQTRCO1FBQzdCLG1GQUFtRjtJQUVyRixDQUFDLENBQUE7SUFFRCxPQUFPLE9BQU8sQ0FBQTtBQUNoQixDQUFDLENBQUEifQ==