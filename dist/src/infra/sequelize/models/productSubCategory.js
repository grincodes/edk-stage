module.exports = function (sequelize, DataTypes) {
    const ProductSubCategory = sequelize.define("product_sub_category", {
        subcategory_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        category_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: "proudct_category",
                key: "category_id"
            },
            onDelete: "cascade",
            onUpdate: "cascade"
        },
        subcategory_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        subcategory_slug: {
            type: DataTypes.STRING(250),
            allowNull: false,
            unique: true
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }, {
        timestamps: true,
        underscored: true,
        tableName: "product_sub_category"
    });
    ProductSubCategory.associate = (models) => {
        ProductSubCategory.belongsTo(models.ProductCategory, { foreignKey: "category_id" });
    };
    return ProductSubCategory;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdFN1YkNhdGVnb3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2luZnJhL3NlcXVlbGl6ZS9tb2RlbHMvcHJvZHVjdFN1YkNhdGVnb3J5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxTQUFTLEVBQUUsU0FBUztJQUM3QyxNQUFNLGtCQUFrQixHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQ3pDLHNCQUFzQixFQUN0QjtRQUNFLGNBQWMsRUFBRTtZQUNkLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixZQUFZLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDOUIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFBVSxFQUFFLElBQUk7U0FDakI7UUFDRCxXQUFXLEVBQUU7WUFDWCxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFBVSxFQUFFO2dCQUNWLEtBQUssRUFBRSxrQkFBa0I7Z0JBQ3pCLEdBQUcsRUFBRSxhQUFhO2FBQ25CO1lBQ0QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLFNBQVM7U0FDcEI7UUFDRCxnQkFBZ0IsRUFBRTtZQUNoQixJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDdEIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsTUFBTSxFQUFFLElBQUk7U0FDYjtRQUNELGdCQUFnQixFQUFFO1lBQ2hCLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztZQUNoQixNQUFNLEVBQUUsSUFBSTtTQUNiO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPO1lBQ3ZCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFlBQVksRUFBRSxLQUFLO1NBQ3BCO0tBQ0YsRUFDRDtRQUNFLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLFdBQVcsRUFBRSxJQUFJO1FBQ2pCLFNBQVMsRUFBRSxzQkFBc0I7S0FDbEMsQ0FDRixDQUFBO0lBRUQsa0JBQWtCLENBQUMsU0FBUyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUU7UUFDeEMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQTtJQUNyRixDQUFDLENBQUE7SUFFRCxPQUFPLGtCQUFrQixDQUFBO0FBQzNCLENBQUMsQ0FBQSJ9