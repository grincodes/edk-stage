module.exports = function (sequelize, DataTypes) {
    const ProductInventory = sequelize.define("product_inventory", {
        product_inventory_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        sku: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: "sku"
        },
        variant_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        product_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: "product",
                key: "product_id"
            },
            onDelete: "cascade",
            onUpdate: "cascade"
        },
        product_brand_id: {
            type: DataTypes.UUID,
            allowNull: true,
            references: {
                model: "product_brand",
                key: "product_brand_id"
            },
            onDelete: "cascade",
            onUpdate: "cascade"
        },
        product_weight: {
            type: DataTypes.DECIMAL(8, 2),
            allowNull: false
        },
        retail_price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        store_price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        sale_price: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0
        },
        currency: {
            type: DataTypes.STRING,
            allowNull: false
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    }, {
        timestamps: true,
        underscored: true,
        tableName: "product_inventory"
    });
    ProductInventory.associate = (models) => {
        ProductInventory.belongsToMany(models.ProductAttributeValue, { as: "AttributesValues",
            through: models.TagProductCategory, foreignKey: "product_inventory_id" }),
            ProductInventory.hasOne(models.ProductBrand, { foreignKey: "product_brand_id" });
        ProductInventory.hasMany(models.ProductImage, { foreignKey: "variant_name" });
        ProductInventory.belongsTo(models.ProductType, { foreignKey: "product_type_id" });
        ProductInventory.belongsTo(models.Product, { foreignKey: "product_id" });
    };
    return ProductInventory;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdEludmVudG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYS9zZXF1ZWxpemUvbW9kZWxzL3Byb2R1Y3RJbnZlbnRvcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLFNBQVMsRUFBRSxTQUFTO0lBQzdDLE1BQU0sZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FDdkMsbUJBQW1CLEVBQ25CO1FBQ0Usb0JBQW9CLEVBQUU7WUFDcEIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLFlBQVksRUFBRSxTQUFTLENBQUMsTUFBTTtZQUM5QixTQUFTLEVBQUUsS0FBSztZQUNoQixVQUFVLEVBQUUsSUFBSTtTQUNqQjtRQUVELEdBQUcsRUFBRTtZQUNILElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtZQUN0QixTQUFTLEVBQUUsS0FBSztZQUNoQixNQUFNLEVBQUUsS0FBSztTQUNkO1FBRUQsWUFBWSxFQUFFO1lBQ1osSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQ3RCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLE1BQU0sRUFBRSxJQUFJO1NBQ2I7UUFFRCxVQUFVLEVBQUU7WUFDVixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFBVSxFQUFFO2dCQUNWLEtBQUssRUFBRSxTQUFTO2dCQUNoQixHQUFHLEVBQUUsWUFBWTthQUNsQjtZQUNELFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1NBQ3BCO1FBRUQsZ0JBQWdCLEVBQUU7WUFDaEIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsVUFBVSxFQUFFO2dCQUNWLEtBQUssRUFBRSxlQUFlO2dCQUN0QixHQUFHLEVBQUUsa0JBQWtCO2FBQ3hCO1lBQ0QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLFNBQVM7U0FDcEI7UUFFRCxjQUFjLEVBQUU7WUFDZCxJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzdCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO1FBRUQsWUFBWSxFQUFFO1lBQ1osSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPO1lBQ3ZCLFNBQVMsRUFBRSxLQUFLO1NBRWpCO1FBRUQsV0FBVyxFQUFFO1lBQ1gsSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPO1lBQ3ZCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFlBQVksRUFBQyxDQUFDO1NBQ2Y7UUFFRCxVQUFVLEVBQUU7WUFDVixJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU87WUFDdkIsU0FBUyxFQUFFLElBQUk7WUFDZixZQUFZLEVBQUMsQ0FBQztTQUNmO1FBQ0QsUUFBUSxFQUFFO1lBQ1IsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQ3RCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO1FBRUQsU0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPO1lBQ3ZCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFlBQVksRUFBRSxJQUFJO1NBQ25CO0tBQ0YsRUFDRDtRQUNFLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLFdBQVcsRUFBRSxJQUFJO1FBQ2pCLFNBQVMsRUFBRSxtQkFBbUI7S0FDL0IsQ0FDRixDQUFBO0lBRUQsZ0JBQWdCLENBQUMsU0FBUyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUU7UUFDdEMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLEVBQUUsRUFBRSxrQkFBa0I7WUFDckYsT0FBTyxFQUFFLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxVQUFVLEVBQUUsc0JBQXNCLEVBQUUsQ0FBQztZQUN6RSxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxFQUFFLFVBQVUsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUE7UUFFaEYsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLENBQUMsQ0FBQTtRQUM3RSxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLENBQUE7UUFDakYsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQTtJQUMxRSxDQUFDLENBQUE7SUFFRCxPQUFPLGdCQUFnQixDQUFBO0FBQ3pCLENBQUMsQ0FBQSJ9