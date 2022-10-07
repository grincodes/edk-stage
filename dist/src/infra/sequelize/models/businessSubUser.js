module.exports = function (sequelize, DataTypes) {
    const BusinessSubUser = sequelize.define("business_sub_user", {
        business_sub_user_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        business_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: "business",
                key: "business_id"
            },
            onDelete: "cascade",
            onUpdate: "cascade"
        },
        user_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: "user",
                key: "user_id"
            },
            onDelete: "cascade",
            onUpdate: "cascade"
        }
    }, {
        timestamps: true,
        underscored: true,
        tableName: "business_sub_user"
    });
    BusinessSubUser.associate = (models) => {
        BusinessSubUser.belongsTo(models.Business, { foreignKey: "business_id" });
        BusinessSubUser.belongsTo(models.BaseUser, { foreignKey: "user_id" });
    };
    return BusinessSubUser;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVzaW5lc3NTdWJVc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2luZnJhL3NlcXVlbGl6ZS9tb2RlbHMvYnVzaW5lc3NTdWJVc2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxTQUFTLEVBQUUsU0FBUztJQUM3QyxNQUFNLGVBQWUsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUN0QyxtQkFBbUIsRUFDbkI7UUFDRSxvQkFBb0IsRUFBRTtZQUNwQixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsWUFBWSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQzlCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFVBQVUsRUFBRSxJQUFJO1NBQ2pCO1FBRUQsV0FBVyxFQUFFO1lBQ1gsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFVBQVUsRUFBRTtnQkFDVixLQUFLLEVBQUUsVUFBVTtnQkFDakIsR0FBRyxFQUFFLGFBQWE7YUFDbkI7WUFDRCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsU0FBUztTQUNwQjtRQUNELE9BQU8sRUFBRTtZQUNQLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixTQUFTLEVBQUUsS0FBSztZQUNoQixVQUFVLEVBQUU7Z0JBQ1YsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsR0FBRyxFQUFFLFNBQVM7YUFDZjtZQUNELFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1NBQ3BCO0tBQ0YsRUFDRDtRQUNFLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLFdBQVcsRUFBRSxJQUFJO1FBQ2pCLFNBQVMsRUFBRSxtQkFBbUI7S0FDL0IsQ0FDRixDQUFBO0lBRUQsZUFBZSxDQUFDLFNBQVMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQ3JDLGVBQWUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFBO1FBQ3pFLGVBQWUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFBO0lBQ3ZFLENBQUMsQ0FBQTtJQUVELE9BQU8sZUFBZSxDQUFBO0FBQ3hCLENBQUMsQ0FBQSJ9