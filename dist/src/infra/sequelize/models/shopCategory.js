module.exports = function (sequelize, DataTypes) {
    const ShopCategory = sequelize.define("shop_category", {
        shop_category_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        shop_category_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        shop_category_slug: {
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
        tableName: "shop_category"
    });
    ShopCategory.associate = (models) => {
        ShopCategory.hasMany(models.Shop, { as: "Shop", foreignKey: "shop_category_id" });
    };
    return ShopCategory;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcENhdGVnb3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2luZnJhL3NlcXVlbGl6ZS9tb2RlbHMvc2hvcENhdGVnb3J5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxTQUFTLEVBQUUsU0FBUztJQUM3QyxNQUFNLFlBQVksR0FBRyxTQUFTLENBQUMsTUFBTSxDQUNuQyxlQUFlLEVBQ2Y7UUFDRSxnQkFBZ0IsRUFBRTtZQUNoQixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsWUFBWSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQzlCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFVBQVUsRUFBRSxJQUFJO1NBQ2pCO1FBQ0Qsa0JBQWtCLEVBQUU7WUFDbEIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQ3RCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLE1BQU0sRUFBRSxJQUFJO1NBQ2I7UUFDRCxrQkFBa0IsRUFBRTtZQUNsQixJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDM0IsU0FBUyxFQUFFLEtBQUs7WUFDaEIsTUFBTSxFQUFFLElBQUk7U0FDYjtRQUNELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTLENBQUMsT0FBTztZQUN2QixTQUFTLEVBQUUsS0FBSztZQUNoQixZQUFZLEVBQUUsS0FBSztTQUNwQjtLQUNGLEVBQ0Q7UUFDRSxVQUFVLEVBQUUsSUFBSTtRQUNoQixXQUFXLEVBQUUsSUFBSTtRQUNqQixTQUFTLEVBQUUsZUFBZTtLQUMzQixDQUNGLENBQUE7SUFFRCxZQUFZLENBQUMsU0FBUyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUU7UUFDbEMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxDQUFBO0lBQ25GLENBQUMsQ0FBQTtJQUVELE9BQU8sWUFBWSxDQUFBO0FBQ3JCLENBQUMsQ0FBQSJ9