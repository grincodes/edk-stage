module.exports = function (sequelize, DataTypes) {
    const ProductStock = sequelize.define("product_stock", {
        stock_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        product_inventory_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: "product_inventory",
                key: "product_inventory_id"
            },
            onDelete: "cascade",
            onUpdate: "cascade"
        },
        units: {
            type: DataTypes.STRING,
            allowNull: false
        },
        units_sold: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        }
    }, {
        timestamps: true,
        underscored: true,
        tableName: "product_stock"
    });
    ProductStock.associate = (models) => {
        ProductStock.belongsTo(models.ProductInventory, { foreignKey: "product_inventory_id" });
    };
    return ProductStock;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdFN0b2NrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2luZnJhL3NlcXVlbGl6ZS9tb2RlbHMvcHJvZHVjdFN0b2NrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxTQUFTLEVBQUUsU0FBUztJQUM3QyxNQUFNLFlBQVksR0FBRyxTQUFTLENBQUMsTUFBTSxDQUNuQyxlQUFlLEVBQ2Y7UUFDRSxRQUFRLEVBQUU7WUFDUixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsWUFBWSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQzlCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFVBQVUsRUFBRSxJQUFJO1NBQ2pCO1FBQ0Qsb0JBQW9CLEVBQUU7WUFDcEIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFVBQVUsRUFBRTtnQkFDVixLQUFLLEVBQUUsbUJBQW1CO2dCQUMxQixHQUFHLEVBQUUsc0JBQXNCO2FBQzVCO1lBQ0QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLFNBQVM7U0FDcEI7UUFDRCxLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDdEIsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFFRCxVQUFVLEVBQUU7WUFDVixJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU87WUFDdkIsWUFBWSxFQUFFLENBQUM7WUFDZixTQUFTLEVBQUUsS0FBSztTQUNqQjtLQUNGLEVBQ0Q7UUFDRSxVQUFVLEVBQUUsSUFBSTtRQUNoQixXQUFXLEVBQUUsSUFBSTtRQUNqQixTQUFTLEVBQUUsZUFBZTtLQUMzQixDQUNGLENBQUE7SUFFRCxZQUFZLENBQUMsU0FBUyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUU7UUFDbEMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxVQUFVLEVBQUUsc0JBQXNCLEVBQUUsQ0FBQyxDQUFBO0lBQ3pGLENBQUMsQ0FBQTtJQUVELE9BQU8sWUFBWSxDQUFBO0FBQ3JCLENBQUMsQ0FBQSJ9