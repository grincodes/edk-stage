module.exports = function (sequelize, DataTypes) {
    const Product360Video = sequelize.define("product_360_video", {
        v360_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
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
        url: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: true,
        underscored: true,
        tableName: "product_360_video"
    });
    Product360Video.associate = (models) => {
        Product360Video.belongsTo(models.Product, { foreignKey: "product_id" });
    };
    return Product360Video;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdDM2MFZpZGVvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2luZnJhL3NlcXVlbGl6ZS9tb2RlbHMvcHJvZHVjdDM2MFZpZGVvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxTQUFTLEVBQUUsU0FBUztJQUM3QyxNQUFNLGVBQWUsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUN0QyxtQkFBbUIsRUFDbkI7UUFDRSxPQUFPLEVBQUU7WUFDUCxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsWUFBWSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQzlCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFVBQVUsRUFBRSxJQUFJO1NBQ2pCO1FBQ0QsVUFBVSxFQUFFO1lBQ1YsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFVBQVUsRUFBRTtnQkFDVixLQUFLLEVBQUUsU0FBUztnQkFDaEIsR0FBRyxFQUFFLFlBQVk7YUFDbEI7WUFDRCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsU0FBUztTQUNwQjtRQUNELEdBQUcsRUFBRTtZQUNILElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtZQUN0QixTQUFTLEVBQUUsS0FBSztTQUNqQjtLQUNGLEVBQ0Q7UUFDRSxVQUFVLEVBQUUsSUFBSTtRQUNoQixXQUFXLEVBQUUsSUFBSTtRQUNqQixTQUFTLEVBQUUsbUJBQW1CO0tBQy9CLENBQ0YsQ0FBQTtJQUVELGVBQWUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUNyQyxlQUFlLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQTtJQUN6RSxDQUFDLENBQUE7SUFFRCxPQUFPLGVBQWUsQ0FBQTtBQUN4QixDQUFDLENBQUEifQ==