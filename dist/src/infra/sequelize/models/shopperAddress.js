module.exports = function (sequelize, DataTypes) {
    const ShopperAddress = sequelize.define("shopper_address", {
        shopper_address_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        shopper_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: "shopper",
                key: "shopper_id"
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
        },
        is_default: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }, {
        timestamps: true,
        underscored: true,
        tableName: "shopper_address"
    });
    ShopperAddress.associate = (models) => {
        ShopperAddress.belongsTo(models.Shopper, { foreignKey: "shopper_id" });
    };
    return ShopperAddress;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcHBlckFkZHJlc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvaW5mcmEvc2VxdWVsaXplL21vZGVscy9zaG9wcGVyQWRkcmVzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQVUsU0FBUyxFQUFFLFNBQVM7SUFDM0MsTUFBTSxjQUFjLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FDckMsaUJBQWlCLEVBQ2pCO1FBQ0Usa0JBQWtCLEVBQUU7WUFDbEIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLFlBQVksRUFBRSxTQUFTLENBQUMsTUFBTTtZQUM5QixTQUFTLEVBQUUsS0FBSztZQUNoQixVQUFVLEVBQUUsSUFBSTtTQUNqQjtRQUVELFVBQVUsRUFBRTtZQUNWLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixTQUFTLEVBQUUsS0FBSztZQUNoQixVQUFVLEVBQUU7Z0JBQ1YsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLEdBQUcsRUFBRSxZQUFZO2FBQ2xCO1lBQ0QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLFNBQVM7U0FDcEI7UUFDRCxPQUFPLEVBQUU7WUFDUCxJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDdEIsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFDRCxLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDdEIsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFDRCxJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDdEIsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFDRCxPQUFPLEVBQUU7WUFDUCxJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDdEIsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFDRCxHQUFHLEVBQUU7WUFDSCxJQUFJLEVBQUUsU0FBUyxDQUFDLEtBQUs7WUFDckIsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFDRCxHQUFHLEVBQUU7WUFDSCxJQUFJLEVBQUUsU0FBUyxDQUFDLEtBQUs7WUFDckIsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFDRCxVQUFVLEVBQUM7WUFDUCxJQUFJLEVBQUMsU0FBUyxDQUFDLE9BQU87WUFDdEIsU0FBUyxFQUFDLEtBQUs7WUFDZixZQUFZLEVBQUUsS0FBSztTQUN0QjtLQUNGLEVBQ0Q7UUFDRSxVQUFVLEVBQUUsSUFBSTtRQUNoQixXQUFXLEVBQUUsSUFBSTtRQUNqQixTQUFTLEVBQUUsaUJBQWlCO0tBQzdCLENBQ0YsQ0FBQTtJQUVELGNBQWMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUNsQyxjQUFjLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQTtJQUMxRSxDQUFDLENBQUE7SUFFRCxPQUFPLGNBQWMsQ0FBQTtBQUN2QixDQUFDLENBQUEifQ==