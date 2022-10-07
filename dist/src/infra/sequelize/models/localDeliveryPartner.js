module.exports = function (sequelize, DataTypes) {
    const LocalDeliveryPartner = sequelize.define("local_delivery_partner", {
        local_delivery_partner_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        local_delivery_partner_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }, {
        timestamps: true,
        underscored: true,
        tableName: "local_delivery_partner"
    });
    LocalDeliveryPartner.associate = (models) => {
        LocalDeliveryPartner.hasOne(models.Shop, { as: "Shop", foreignKey: "local_delivery_partner_id" });
    };
    return LocalDeliveryPartner;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxEZWxpdmVyeVBhcnRuZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvaW5mcmEvc2VxdWVsaXplL21vZGVscy9sb2NhbERlbGl2ZXJ5UGFydG5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQVUsU0FBUyxFQUFFLFNBQVM7SUFDN0MsTUFBTSxvQkFBb0IsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUMzQyx3QkFBd0IsRUFDeEI7UUFDRSx5QkFBeUIsRUFBRTtZQUN6QixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsWUFBWSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQzlCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFVBQVUsRUFBRSxJQUFJO1NBQ2pCO1FBQ0QsMkJBQTJCLEVBQUU7WUFDM0IsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQ3RCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO1FBRUQsU0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPO1lBQ3ZCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFlBQVksRUFBRSxLQUFLO1NBQ3BCO0tBQ0YsRUFDRDtRQUNFLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLFdBQVcsRUFBRSxJQUFJO1FBQ2pCLFNBQVMsRUFBRSx3QkFBd0I7S0FDcEMsQ0FDRixDQUFBO0lBRUQsb0JBQW9CLENBQUMsU0FBUyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUU7UUFDMUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSwyQkFBMkIsRUFBRSxDQUFDLENBQUE7SUFDbkcsQ0FBQyxDQUFBO0lBRUQsT0FBTyxvQkFBb0IsQ0FBQTtBQUM3QixDQUFDLENBQUEifQ==