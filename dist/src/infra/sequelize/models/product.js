module.exports = function (sequelize, DataTypes) {
    const Product = sequelize.define("product", {
        product_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        product_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        product_description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: "product_category",
                key: "category_id"
            },
            onUpdate: "cascade"
        },
        product_slug: {
            type: DataTypes.STRING(250),
            allowNull: false
        },
        product_web_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        shop_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: "shop",
                key: "shop_id"
            },
            onDelete: "cascade",
            onUpdate: "cascade"
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }, {
        timestamps: true,
        underscored: true,
        tableName: "product"
    });
    Product.associate = (models) => {
        Product.hasOne(models.Product360Video, { foreignKey: "product_id" });
        Product.belongsTo(models.ProductCategory, { as: "ProductCategories", foreignKey: "category_id" });
        Product.belongsTo(models.Shop, { foreignKey: "shop_id" });
    };
    return Product;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYS9zZXF1ZWxpemUvbW9kZWxzL3Byb2R1Y3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLFNBQVMsRUFBRSxTQUFTO0lBQzdDLE1BQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQzlCLFNBQVMsRUFDVDtRQUNFLFVBQVUsRUFBRTtZQUNWLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixZQUFZLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDOUIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFBVSxFQUFFLElBQUk7U0FDakI7UUFFRCxZQUFZLEVBQUU7WUFDWixJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDdEIsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFFRCxtQkFBbUIsRUFBRTtZQUNuQixJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDdEIsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFFRCxXQUFXLEVBQUU7WUFDWCxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFBVSxFQUFFO2dCQUNWLEtBQUssRUFBRSxrQkFBa0I7Z0JBQ3pCLEdBQUcsRUFBRSxhQUFhO2FBQ25CO1lBQ0QsUUFBUSxFQUFFLFNBQVM7U0FDcEI7UUFFRCxZQUFZLEVBQUU7WUFDWixJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDM0IsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFFRCxjQUFjLEVBQUU7WUFDZCxJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDdEIsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFFRCxPQUFPLEVBQUU7WUFDUCxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFBVSxFQUFFO2dCQUNWLEtBQUssRUFBRSxNQUFNO2dCQUNiLEdBQUcsRUFBRSxTQUFTO2FBQ2Y7WUFDRCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsU0FBUztTQUNwQjtRQUVELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTLENBQUMsT0FBTztZQUN2QixTQUFTLEVBQUUsS0FBSztZQUNoQixZQUFZLEVBQUUsS0FBSztTQUNwQjtLQUNGLEVBQ0Q7UUFDRSxVQUFVLEVBQUUsSUFBSTtRQUNoQixXQUFXLEVBQUUsSUFBSTtRQUNqQixTQUFTLEVBQUUsU0FBUztLQUNyQixDQUNGLENBQUE7SUFFRCxPQUFPLENBQUMsU0FBUyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUU7UUFDN0IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUE7UUFDcEUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLEVBQUUsRUFBRSxFQUFFLG1CQUFtQixFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFBO1FBQ2pHLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFBO0lBQzNELENBQUMsQ0FBQTtJQUVELE9BQU8sT0FBTyxDQUFBO0FBQ2hCLENBQUMsQ0FBQSJ9