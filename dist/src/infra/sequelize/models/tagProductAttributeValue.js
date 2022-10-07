module.exports = function (sequelize, DataTypes) {
    const TagProductAttributeValue = sequelize.define("tag_product_attribute_value", {
        tag_product_attr_value_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        product_inventory_id: {
            type: DataTypes.UUID,
            primaryKey: false,
            references: {
                model: "product_inventory",
                key: "product_inventory_id"
            },
            onDelete: "cascade",
            onUpdate: "cascade",
            unique: "unique-product-per-attributes"
        },
        attribute_value_id: {
            type: DataTypes.UUID,
            primaryKey: false,
            references: {
                model: "product_attribute_value",
                key: "attribute_value_id"
            },
            onDelete: "cascade",
            onUpdate: "cascade",
            unique: "unique-product-per-attributes"
        }
    }, {
        timestamps: true,
        underscored: true,
        tableName: "tag_product_attribute_value"
    });
    TagProductAttributeValue.associate = (models) => {
        TagProductAttributeValue.belongsTo(models.ProductInventory, { foreignKey: "product_inventory_id", as: "ProductInventory" });
        TagProductAttributeValue.belongsTo(models.ProductAttributeValue, { foreignKey: "attribute_value_id", as: "ProductAttributeValue" });
    };
    return TagProductAttributeValue;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnUHJvZHVjdEF0dHJpYnV0ZVZhbHVlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2luZnJhL3NlcXVlbGl6ZS9tb2RlbHMvdGFnUHJvZHVjdEF0dHJpYnV0ZVZhbHVlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxTQUFTLEVBQUUsU0FBUztJQUM3QyxNQUFNLHdCQUF3QixHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQy9DLDZCQUE2QixFQUM3QjtRQUNFLHlCQUF5QixFQUFFO1lBQ3pCLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixZQUFZLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDOUIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFBVSxFQUFFLElBQUk7U0FDakI7UUFDRCxvQkFBb0IsRUFBRTtZQUNwQixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsVUFBVSxFQUFFLEtBQUs7WUFDakIsVUFBVSxFQUFFO2dCQUNWLEtBQUssRUFBRSxtQkFBbUI7Z0JBQzFCLEdBQUcsRUFBRSxzQkFBc0I7YUFDNUI7WUFDRCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsU0FBUztZQUNuQixNQUFNLEVBQUUsK0JBQStCO1NBQ3hDO1FBRUQsa0JBQWtCLEVBQUU7WUFDbEIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLFVBQVUsRUFBRTtnQkFDVixLQUFLLEVBQUUseUJBQXlCO2dCQUNoQyxHQUFHLEVBQUUsb0JBQW9CO2FBQzFCO1lBQ0QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsTUFBTSxFQUFFLCtCQUErQjtTQUN4QztLQUNGLEVBQ0Q7UUFDRSxVQUFVLEVBQUUsSUFBSTtRQUNoQixXQUFXLEVBQUUsSUFBSTtRQUNqQixTQUFTLEVBQUUsNkJBQTZCO0tBQ3pDLENBQ0YsQ0FBQTtJQUVELHdCQUF3QixDQUFDLFNBQVMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQzlDLHdCQUF3QixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxVQUFVLEVBQUUsc0JBQXNCLEVBQUUsRUFBRSxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQTtRQUMzSCx3QkFBd0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLEVBQUUsVUFBVSxFQUFFLG9CQUFvQixFQUFFLEVBQUUsRUFBRSx1QkFBdUIsRUFBRSxDQUFDLENBQUE7SUFDckksQ0FBQyxDQUFBO0lBRUQsT0FBTyx3QkFBd0IsQ0FBQTtBQUNqQyxDQUFDLENBQUEifQ==