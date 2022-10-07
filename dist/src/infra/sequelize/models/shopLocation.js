module.exports = function (sequelize, DataTypes) {
    const ShopLocation = sequelize.define("shop_location", {
        shop_location_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
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
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lng: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        lat: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    }, {
        timestamps: true,
        underscored: true,
        tableName: "shop_location"
    });
    ShopLocation.associate = (models) => {
        ShopLocation.belongsTo(models.Shop, { foreignKey: "shop_id" });
    };
    return ShopLocation;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcExvY2F0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2luZnJhL3NlcXVlbGl6ZS9tb2RlbHMvc2hvcExvY2F0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxTQUFTLEVBQUUsU0FBUztJQUM3QyxNQUFNLFlBQVksR0FBRyxTQUFTLENBQUMsTUFBTSxDQUNuQyxlQUFlLEVBQ2Y7UUFDRSxnQkFBZ0IsRUFBRTtZQUNoQixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsWUFBWSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQzlCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFVBQVUsRUFBRSxJQUFJO1NBQ2pCO1FBRUQsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFVBQVUsRUFBRTtnQkFDVixLQUFLLEVBQUUsTUFBTTtnQkFDYixHQUFHLEVBQUUsU0FBUzthQUNmO1lBQ0QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLFNBQVM7U0FDcEI7UUFDRCxPQUFPLEVBQUU7WUFDUCxJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDdEIsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFDRCxLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDdEIsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFDRCxJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDdEIsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFDRCxPQUFPLEVBQUU7WUFDUCxJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDdEIsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFDRCxHQUFHLEVBQUU7WUFDSCxJQUFJLEVBQUUsU0FBUyxDQUFDLEtBQUs7WUFDckIsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFDRCxHQUFHLEVBQUU7WUFDSCxJQUFJLEVBQUUsU0FBUyxDQUFDLEtBQUs7WUFDckIsU0FBUyxFQUFFLEtBQUs7U0FDakI7S0FDRixFQUNEO1FBQ0UsVUFBVSxFQUFFLElBQUk7UUFDaEIsV0FBVyxFQUFFLElBQUk7UUFDakIsU0FBUyxFQUFFLGVBQWU7S0FDM0IsQ0FDRixDQUFBO0lBRUQsWUFBWSxDQUFDLFNBQVMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQ2xDLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFBO0lBQ2hFLENBQUMsQ0FBQTtJQUVELE9BQU8sWUFBWSxDQUFBO0FBQ3JCLENBQUMsQ0FBQSJ9