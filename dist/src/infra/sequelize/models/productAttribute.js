module.exports = function (sequelize, DataTypes) {
    const ProductAttribute = sequelize.define("product_attribute", {
        attribute_id: {
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
        attribute_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        attribute_description: {
            type: DataTypes.STRING(250),
            allowNull: false
        }
    }, {
        timestamps: true,
        underscored: true,
        tableName: "product_attribute"
    });
    ProductAttribute.associate = (models) => {
        ProductAttribute.belongsTo(models.ProductCategory, { foreignKey: "category_id" });
        ProductAttribute.hasMany(models.ProductAttributeValue, { as: "ProductAttributeValue", foreignKey: "attribute_id" });
    };
    return ProductAttribute;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdEF0dHJpYnV0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYS9zZXF1ZWxpemUvbW9kZWxzL3Byb2R1Y3RBdHRyaWJ1dGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLFNBQVMsRUFBRSxTQUFTO0lBQzdDLE1BQU0sZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FDdkMsbUJBQW1CLEVBQ25CO1FBQ0UsWUFBWSxFQUFFO1lBQ1osSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLFlBQVksRUFBRSxTQUFTLENBQUMsTUFBTTtZQUM5QixTQUFTLEVBQUUsS0FBSztZQUNoQixVQUFVLEVBQUUsSUFBSTtTQUNqQjtRQUVELFdBQVcsRUFBRTtZQUNYLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixTQUFTLEVBQUUsS0FBSztZQUNoQixVQUFVLEVBQUU7Z0JBQ1YsS0FBSyxFQUFFLGtCQUFrQjtnQkFDekIsR0FBRyxFQUFFLGFBQWE7YUFDbkI7WUFDRCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsU0FBUztTQUNwQjtRQUVELGNBQWMsRUFBRTtZQUNkLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtZQUN0QixTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUNELHFCQUFxQixFQUFFO1lBQ3JCLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUMzQixTQUFTLEVBQUUsS0FBSztTQUNqQjtLQUNGLEVBQ0Q7UUFDRSxVQUFVLEVBQUUsSUFBSTtRQUNoQixXQUFXLEVBQUUsSUFBSTtRQUNqQixTQUFTLEVBQUUsbUJBQW1CO0tBQy9CLENBQ0YsQ0FBQTtJQUVELGdCQUFnQixDQUFDLFNBQVMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQ3RDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUE7UUFDakYsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLEVBQUUsRUFBRSx1QkFBdUIsRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLENBQUMsQ0FBQTtJQUNySCxDQUFDLENBQUE7SUFFRCxPQUFPLGdCQUFnQixDQUFBO0FBQ3pCLENBQUMsQ0FBQSJ9