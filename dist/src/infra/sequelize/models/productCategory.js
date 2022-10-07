module.exports = function (sequelize, DataTypes) {
    const ProductCategory = sequelize.define("product_category", {
        category_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        product_type_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: "product_type",
                key: "product_type_id",
            },
            onDelete: "cascade",
            onUpdate: "cascade",
        },
        category_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        category_slug: {
            type: DataTypes.STRING(250),
            allowNull: false,
            unique: true,
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    }, {
        timestamps: true,
        underscored: true,
        tableName: "product_category",
    });
    ProductCategory.associate = (models) => {
        ProductCategory.hasMany(models.ProductSubCategory, { as: "ProductSubCategory", foreignKey: "category_id" }),
            ProductCategory.belongsTo(models.ProductType, { foreignKey: "product_type_id" }),
            ProductCategory.hasMany(models.Product, { as: "Product", foreignKey: "category_id" });
    };
    return ProductCategory;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdENhdGVnb3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2luZnJhL3NlcXVlbGl6ZS9tb2RlbHMvcHJvZHVjdENhdGVnb3J5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxTQUFTLEVBQUUsU0FBUztJQUM3QyxNQUFNLGVBQWUsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUN0QyxrQkFBa0IsRUFDbEI7UUFDRSxXQUFXLEVBQUU7WUFDWCxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsWUFBWSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQzlCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFVBQVUsRUFBRSxJQUFJO1NBQ2pCO1FBRUQsZUFBZSxFQUFFO1lBQ2YsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFVBQVUsRUFBRTtnQkFDVixLQUFLLEVBQUUsY0FBYztnQkFDckIsR0FBRyxFQUFFLGlCQUFpQjthQUN2QjtZQUNELFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1NBQ3BCO1FBRUQsYUFBYSxFQUFFO1lBQ2IsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQ3RCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLE1BQU0sRUFBRSxJQUFJO1NBQ2I7UUFDRCxhQUFhLEVBQUU7WUFDYixJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDM0IsU0FBUyxFQUFFLEtBQUs7WUFDaEIsTUFBTSxFQUFFLElBQUk7U0FDYjtRQUNELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTLENBQUMsT0FBTztZQUN2QixTQUFTLEVBQUUsS0FBSztZQUNoQixZQUFZLEVBQUUsS0FBSztTQUNwQjtLQUNGLEVBQ0Q7UUFDRSxVQUFVLEVBQUUsSUFBSTtRQUNoQixXQUFXLEVBQUUsSUFBSTtRQUNqQixTQUFTLEVBQUUsa0JBQWtCO0tBQzlCLENBQ0YsQ0FBQTtJQUVELGVBQWUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUNuQyxlQUFlLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLEVBQUUsRUFBRSxvQkFBb0IsRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLENBQUM7WUFDM0csZUFBZSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLENBQUM7WUFDaEYsZUFBZSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQTtJQUN6RixDQUFDLENBQUE7SUFFRCxPQUFPLGVBQWUsQ0FBQTtBQUN4QixDQUFDLENBQUEifQ==