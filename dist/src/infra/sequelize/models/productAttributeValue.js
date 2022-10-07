module.exports = function (sequelize, DataTypes) {
    const ProductAttributeValue = sequelize.define("product_attribute_value", {
        attribute_value_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        attribute_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: "prdouct_attribute",
                key: "attribute_id"
            },
            onDelete: "cascade",
            onUpdate: "cascade"
        },
        attribute_value: {
            type: DataTypes.STRING,
            allowNull: false
        },
        attribute_value_sequence: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: true,
        underscored: true,
        tableName: "product_attribute_value"
    });
    ProductAttributeValue.associate = (models) => {
        ProductAttributeValue.belongsTo(models.ProductAttribute, { foreignKey: "attribute_id" });
        ProductAttributeValue.belongsToMany(models.ProductInventory, { as: 'ProductInventory',
            through: models.TagProductAttributeValue, foreignKey: 'attribute_value_id' });
    };
    return ProductAttributeValue;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdEF0dHJpYnV0ZVZhbHVlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2luZnJhL3NlcXVlbGl6ZS9tb2RlbHMvcHJvZHVjdEF0dHJpYnV0ZVZhbHVlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxTQUFTLEVBQUUsU0FBUztJQUM3QyxNQUFNLHFCQUFxQixHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQzVDLHlCQUF5QixFQUN6QjtRQUNFLGtCQUFrQixFQUFFO1lBQ2xCLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixZQUFZLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDOUIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFBVSxFQUFFLElBQUk7U0FDakI7UUFDRCxZQUFZLEVBQUU7WUFDWixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFBVSxFQUFFO2dCQUNWLEtBQUssRUFBRSxtQkFBbUI7Z0JBQzFCLEdBQUcsRUFBRSxjQUFjO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLFNBQVM7U0FDcEI7UUFDRCxlQUFlLEVBQUU7WUFDZixJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDdEIsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFDRCx3QkFBd0IsRUFBRTtZQUN4QixJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU87WUFDdkIsU0FBUyxFQUFFLEtBQUs7U0FDakI7S0FDRixFQUNEO1FBQ0UsVUFBVSxFQUFFLElBQUk7UUFDaEIsV0FBVyxFQUFFLElBQUk7UUFDakIsU0FBUyxFQUFFLHlCQUF5QjtLQUNyQyxDQUNGLENBQUE7SUFFRCxxQkFBcUIsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUUzQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxDQUFDLENBQUE7UUFFeEYscUJBQXFCLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsRUFBRSxrQkFBa0I7WUFDckYsT0FBTyxFQUFFLE1BQU0sQ0FBQyx3QkFBd0IsRUFBRSxVQUFVLEVBQUUsb0JBQW9CLEVBQUMsQ0FBQyxDQUFBO0lBQzlFLENBQUMsQ0FBQTtJQUVELE9BQU8scUJBQXFCLENBQUE7QUFDOUIsQ0FBQyxDQUFBIn0=