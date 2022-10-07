module.exports = function (sequelize, DataTypes) {
    const ShopDocument = sequelize.define("shop_document", {
        shop_document_id: {
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
        document_url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        document_type: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: true,
        underscored: true,
        tableName: "shop_document"
    });
    ShopDocument.associate = (models) => {
        ShopDocument.belongsTo(models.Shop, { foreignKey: "shop_id" });
    };
    return ShopDocument;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcERvY3VtZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2luZnJhL3NlcXVlbGl6ZS9tb2RlbHMvc2hvcERvY3VtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxTQUFTLEVBQUUsU0FBUztJQUM3QyxNQUFNLFlBQVksR0FBRyxTQUFTLENBQUMsTUFBTSxDQUNuQyxlQUFlLEVBQ2Y7UUFDRSxnQkFBZ0IsRUFBRTtZQUNoQixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsWUFBWSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQzlCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFVBQVUsRUFBRSxJQUFJO1NBQ2pCO1FBRUQsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFVBQVUsRUFBRTtnQkFDVixLQUFLLEVBQUUsTUFBTTtnQkFDYixHQUFHLEVBQUUsU0FBUzthQUNmO1lBQ0QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLFNBQVM7U0FDcEI7UUFDRCxZQUFZLEVBQUU7WUFDWixJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDdEIsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFDRCxhQUFhLEVBQUU7WUFDYixJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDdEIsU0FBUyxFQUFFLEtBQUs7U0FDakI7S0FDRixFQUNEO1FBQ0UsVUFBVSxFQUFFLElBQUk7UUFDaEIsV0FBVyxFQUFFLElBQUk7UUFDakIsU0FBUyxFQUFFLGVBQWU7S0FDM0IsQ0FDRixDQUFBO0lBRUQsWUFBWSxDQUFDLFNBQVMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQ2xDLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFBO0lBQ2hFLENBQUMsQ0FBQTtJQUVELE9BQU8sWUFBWSxDQUFBO0FBQ3JCLENBQUMsQ0FBQSJ9