module.exports = function (sequelize, DataTypes) {
    const TagProductCategory = sequelize.define("tag_product_category", {
        tag_product_category_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        product_id: {
            type: DataTypes.UUID,
            primaryKey: false,
            references: {
                model: "product",
                key: "product_id"
            },
            onDelete: "cascade",
            onUpdate: "cascade",
            unique: "unique-category-per-product"
        },
        category_id: {
            type: DataTypes.UUID,
            primaryKey: false,
            references: {
                model: "product_category",
                key: "category_id"
            },
            onDelete: "cascade",
            onUpdate: "cascade",
            unique: "unique-category-per-product"
        }
    }, {
        timestamps: true,
        underscored: true,
        tableName: "tag_product_category"
    });
    TagProductCategory.associate = (models) => {
        TagProductCategory.belongsTo(models.Product, { foreignKey: "product_id", targetKey: "product_id", as: "Product" });
        TagProductCategory.belongsTo(models.ProductCategory, { foreignKey: "category_id", targetKey: "category_id", as: "ProductCategory" });
    };
    return TagProductCategory;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnUHJvZHVjdENhdGVnb3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2luZnJhL3NlcXVlbGl6ZS9tb2RlbHMvdGFnUHJvZHVjdENhdGVnb3J5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxTQUFTLEVBQUUsU0FBUztJQUM3QyxNQUFNLGtCQUFrQixHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQ3pDLHNCQUFzQixFQUN0QjtRQUNFLHVCQUF1QixFQUFFO1lBQ3ZCLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixZQUFZLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDOUIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFBVSxFQUFFLElBQUk7U0FDakI7UUFFRCxVQUFVLEVBQUU7WUFDVixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsVUFBVSxFQUFFLEtBQUs7WUFDakIsVUFBVSxFQUFFO2dCQUNWLEtBQUssRUFBRSxTQUFTO2dCQUNoQixHQUFHLEVBQUUsWUFBWTthQUNsQjtZQUNELFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1lBQ25CLE1BQU0sRUFBRSw2QkFBNkI7U0FDdEM7UUFDRCxXQUFXLEVBQUU7WUFDWCxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsVUFBVSxFQUFFLEtBQUs7WUFDakIsVUFBVSxFQUFFO2dCQUNWLEtBQUssRUFBRSxrQkFBa0I7Z0JBQ3pCLEdBQUcsRUFBRSxhQUFhO2FBQ25CO1lBQ0QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsTUFBTSxFQUFFLDZCQUE2QjtTQUN0QztLQUNGLEVBQ0Q7UUFDRSxVQUFVLEVBQUUsSUFBSTtRQUNoQixXQUFXLEVBQUUsSUFBSTtRQUNqQixTQUFTLEVBQUUsc0JBQXNCO0tBQ2xDLENBQ0YsQ0FBQTtJQUVELGtCQUFrQixDQUFDLFNBQVMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQ3hDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFBO1FBQ2xILGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLENBQUE7SUFDdEksQ0FBQyxDQUFBO0lBRUQsT0FBTyxrQkFBa0IsQ0FBQTtBQUMzQixDQUFDLENBQUEifQ==