module.exports = function (sequelize, DataTypes) {
    const Role = sequelize.define("role", {
        role_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        role_user_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: "base_user",
                key: "base_user_id"
            },
            onDelete: "cascade",
            onUpdate: "cascade"
        },
        role: {
            type: DataTypes.STRING(250),
            allowNull: false
        }
    }, {
        timestamps: true,
        underscored: true,
        tableName: "role"
    });
    Role.associate = (models) => {
        Role.belongsTo(models.BaseUser, { as: "Role", foreignKey: "role_user_id" });
    };
    return Role;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYS9zZXF1ZWxpemUvbW9kZWxzL3JvbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLFNBQVMsRUFBRSxTQUFTO0lBQzdDLE1BQU0sSUFBSSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQzNCLE1BQU0sRUFDTjtRQUNFLE9BQU8sRUFBRTtZQUNQLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixZQUFZLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDOUIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFBVSxFQUFFLElBQUk7U0FDakI7UUFDRCxZQUFZLEVBQUU7WUFDWixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsVUFBVSxFQUFFO2dCQUNWLEtBQUssRUFBRSxXQUFXO2dCQUNsQixHQUFHLEVBQUUsY0FBYzthQUNwQjtZQUNELFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1NBQ3BCO1FBQ0QsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQzNCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO0tBQ0YsRUFDRDtRQUNFLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLFdBQVcsRUFBRSxJQUFJO1FBQ2pCLFNBQVMsRUFBRSxNQUFNO0tBQ2xCLENBQ0YsQ0FBQTtJQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsQ0FBQyxDQUFBO0lBQzdFLENBQUMsQ0FBQTtJQUVELE9BQU8sSUFBSSxDQUFBO0FBQ2IsQ0FBQyxDQUFBIn0=