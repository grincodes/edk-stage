module.exports = function (sequelize, DataTypes) {
    const ProductType = sequelize.define("product_type", {
        product_type_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        product_type_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        timestamps: true,
        underscored: true,
        tableName: "product_type",
    });
    ProductType.associate = (models) => {
        ProductType.hasMany(models.ProductCategory, { as: "ProductCategories", foreignKey: "product_type_id" });
        // ProductType.hasOne(models.ProductInventory, { as: "ProductInventory", foreignKey: "product_type_id" })
    };
    return ProductType;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdFR5cGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvaW5mcmEvc2VxdWVsaXplL21vZGVscy9wcm9kdWN0VHlwZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQVUsU0FBUyxFQUFFLFNBQVM7SUFDN0MsTUFBTSxXQUFXLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FDbEMsY0FBYyxFQUNkO1FBQ0UsZUFBZSxFQUFFO1lBQ2YsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLFlBQVksRUFBRSxTQUFTLENBQUMsTUFBTTtZQUM5QixTQUFTLEVBQUUsS0FBSztZQUNoQixVQUFVLEVBQUUsSUFBSTtTQUNqQjtRQUVELGlCQUFpQixFQUFFO1lBQ2pCLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtZQUN0QixTQUFTLEVBQUUsS0FBSztTQUNqQjtLQUNGLEVBQ0Q7UUFDRSxVQUFVLEVBQUUsSUFBSTtRQUNoQixXQUFXLEVBQUUsSUFBSTtRQUNqQixTQUFTLEVBQUUsY0FBYztLQUMxQixDQUNGLENBQUE7SUFFRCxXQUFXLENBQUMsU0FBUyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUU7UUFDakMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLEVBQUUsRUFBRSxFQUFFLG1CQUFtQixFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLENBQUE7UUFDdkcseUdBQXlHO0lBQzNHLENBQUMsQ0FBQTtJQUVELE9BQU8sV0FBVyxDQUFBO0FBQ3BCLENBQUMsQ0FBQSJ9