module.exports = function (sequelize, DataTypes) {
    const Shop = sequelize.define("shop", {
        shop_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        shop_category_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: "shop_category",
                key: "shop_category_id"
            },
            onUpdate: "cascade"
        },
        shop_name: {
            type: DataTypes.STRING(250),
            allowNull: false
        },
        shop_email: {
            type: DataTypes.STRING(250),
            allowNull: false,
            unique: true
        },
        shop_phone: {
            type: DataTypes.STRING(250),
            allowNull: false,
            unique: true
        },
        shop_logo: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null
        },
        shop_owner_type: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        shop_owner_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: "base_user",
                key: "base_user_id"
            },
            onDelete: "cascade",
            onUpdate: "cascade"
        },
        local_delivery_partner_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: "local_delivery_partner",
                key: "local_delivery_partner_id"
            },
            onUpdate: "cascade"
        },
        international_delivery_partner_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: "international_delivery_partner",
                key: "international_delivery_partner_id"
            },
            onUpdate: "cascade"
        },
        is_verified: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }, {
        timestamps: true,
        underscored: true,
        tableName: "shop"
    });
    Shop.associate = (models) => {
        Shop.hasOne(models.ShopLocation, { as: "ShopLocation", foreignKey: "shop_id" }),
            // Shop.hasMany(models.ShopLogistics, { as: 'ShopLogistics', foreignKey: 'shop_id' }),
            Shop.hasMany(models.ShopDocument, { as: "ShopDocument", foreignKey: "shop_id" }),
            Shop.hasMany(models.Product, { as: "Product", foreignKey: "shop_id" }),
            Shop.belongsTo(models.ShopCategory, { foreignKey: "shop_category_id" });
        Shop.belongsTo(models.LocalDeliveryPartner, { as: "LocalDeliveryPartner", foreignKey: "local_delivery_partner_id" });
        Shop.belongsTo(models.InternationalDeliveryPartner, { as: "InternationalDeliveryPartner", foreignKey: "international_delivery_partner_id" });
    };
    return Shop;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYS9zZXF1ZWxpemUvbW9kZWxzL3Nob3AuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLFNBQVMsRUFBRSxTQUFTO0lBQzdDLE1BQU0sSUFBSSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQzNCLE1BQU0sRUFDTjtRQUNFLE9BQU8sRUFBRTtZQUNQLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixZQUFZLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDOUIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFBVSxFQUFFLElBQUk7U0FDakI7UUFFRCxnQkFBZ0IsRUFBRTtZQUNoQixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFBVSxFQUFFO2dCQUNWLEtBQUssRUFBRSxlQUFlO2dCQUN0QixHQUFHLEVBQUUsa0JBQWtCO2FBQ3hCO1lBQ0QsUUFBUSxFQUFFLFNBQVM7U0FDcEI7UUFFRCxTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDM0IsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFDRCxVQUFVLEVBQUU7WUFDVixJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDM0IsU0FBUyxFQUFFLEtBQUs7WUFDaEIsTUFBTSxFQUFFLElBQUk7U0FDYjtRQUNELFVBQVUsRUFBRTtZQUNWLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztZQUNoQixNQUFNLEVBQUUsSUFBSTtTQUNiO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQ3RCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsWUFBWSxFQUFFLElBQUk7U0FDbkI7UUFDRCxlQUFlLEVBQUU7WUFDZixJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDdEIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsTUFBTSxFQUFFLElBQUk7U0FDYjtRQUNELGFBQWEsRUFBRTtZQUNiLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixTQUFTLEVBQUUsS0FBSztZQUNoQixVQUFVLEVBQUU7Z0JBQ1YsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLEdBQUcsRUFBRSxjQUFjO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLFNBQVM7U0FDcEI7UUFFRCx5QkFBeUIsRUFBRTtZQUN6QixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFBVSxFQUFFO2dCQUNWLEtBQUssRUFBRSx3QkFBd0I7Z0JBQy9CLEdBQUcsRUFBRSwyQkFBMkI7YUFDakM7WUFDRCxRQUFRLEVBQUUsU0FBUztTQUNwQjtRQUVELGlDQUFpQyxFQUFFO1lBQ2pDLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixTQUFTLEVBQUUsS0FBSztZQUNoQixVQUFVLEVBQUU7Z0JBQ1YsS0FBSyxFQUFFLGdDQUFnQztnQkFDdkMsR0FBRyxFQUFFLG1DQUFtQzthQUN6QztZQUNELFFBQVEsRUFBRSxTQUFTO1NBQ3BCO1FBRUQsV0FBVyxFQUFFO1lBQ1gsSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPO1lBQ3ZCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFlBQVksRUFBRSxLQUFLO1NBQ3BCO0tBQ0YsRUFDRDtRQUNFLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLFdBQVcsRUFBRSxJQUFJO1FBQ2pCLFNBQVMsRUFBRSxNQUFNO0tBQ2xCLENBQ0YsQ0FBQTtJQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsRUFBRSxFQUFFLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsQ0FBQztZQUM3RSxzRkFBc0Y7WUFDdEYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLENBQUM7WUFDaEYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLENBQUM7WUFDdEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQTtRQUN6RSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLEVBQUUsRUFBRSxzQkFBc0IsRUFBRSxVQUFVLEVBQUUsMkJBQTJCLEVBQUUsQ0FBQyxDQUFBO1FBQ3BILElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLDRCQUE0QixFQUFFLEVBQUUsRUFBRSxFQUFFLDhCQUE4QixFQUFFLFVBQVUsRUFBRSxtQ0FBbUMsRUFBRSxDQUFDLENBQUE7SUFDOUksQ0FBQyxDQUFBO0lBRUQsT0FBTyxJQUFJLENBQUE7QUFDYixDQUFDLENBQUEifQ==