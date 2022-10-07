module.exports = function (sequelize, DataTypes) {
    const ProductImage = sequelize.define("product_image", {
        image_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        image_url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        alt_text: {
            type: DataTypes.STRING(250),
            allowNull: false
        },
        thumbnail_url: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        timestamps: true,
        underscored: true,
        tableName: "product_image"
    });
    ProductImage.associate = (models) => {
        ProductImage.belongsTo(models.ProductInventory, { target: "variant_name", foreignKey: 'tag_variant_name' });
    };
    return ProductImage;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdEltYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2luZnJhL3NlcXVlbGl6ZS9tb2RlbHMvcHJvZHVjdEltYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxTQUFTLEVBQUUsU0FBUztJQUM3QyxNQUFNLFlBQVksR0FBRyxTQUFTLENBQUMsTUFBTSxDQUNuQyxlQUFlLEVBQ2Y7UUFDRSxRQUFRLEVBQUU7WUFDUixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsWUFBWSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQzlCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFVBQVUsRUFBRSxJQUFJO1NBQ2pCO1FBRUQsU0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQ3RCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO1FBRUQsUUFBUSxFQUFFO1lBQ1IsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQzNCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO1FBRUQsYUFBYSxFQUFFO1lBQ2IsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQ3RCLFNBQVMsRUFBRSxJQUFJO1NBQ2hCO0tBQ0YsRUFDRDtRQUNFLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLFdBQVcsRUFBRSxJQUFJO1FBQ2pCLFNBQVMsRUFBRSxlQUFlO0tBQzNCLENBQ0YsQ0FBQTtJQUVELFlBQVksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUNqQyxZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFDN0MsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUE7SUFDOUQsQ0FBQyxDQUFBO0lBRUQsT0FBTyxZQUFZLENBQUE7QUFDckIsQ0FBQyxDQUFBIn0=