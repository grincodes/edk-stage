module.exports = function (sequelize, DataTypes) {
    const BusinessDocument = sequelize.define("business_document", {
        business_document_id: {
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
        tableName: "business_document"
    });
    BusinessDocument.associate = (models) => {
        BusinessDocument.belongsTo(models.Business, { foreignKey: "buisness_id" });
    };
    return BusinessDocument;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVzaW5lc3NEb2N1bWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYS9zZXF1ZWxpemUvbW9kZWxzL2J1c2luZXNzRG9jdW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLFNBQVMsRUFBRSxTQUFTO0lBQzdDLE1BQU0sZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FDdkMsbUJBQW1CLEVBQ25CO1FBQ0Usb0JBQW9CLEVBQUU7WUFDcEIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLFlBQVksRUFBRSxTQUFTLENBQUMsTUFBTTtZQUM5QixTQUFTLEVBQUUsS0FBSztZQUNoQixVQUFVLEVBQUUsSUFBSTtTQUNqQjtRQUVELFdBQVcsRUFBRTtZQUNYLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixTQUFTLEVBQUUsS0FBSztZQUNoQixVQUFVLEVBQUU7Z0JBQ1YsS0FBSyxFQUFFLFVBQVU7Z0JBQ2pCLEdBQUcsRUFBRSxhQUFhO2FBQ25CO1lBQ0QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLFNBQVM7U0FDcEI7UUFDRCxZQUFZLEVBQUU7WUFDWixJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDdEIsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFDRCxhQUFhLEVBQUU7WUFDYixJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDdEIsU0FBUyxFQUFFLEtBQUs7U0FDakI7S0FDRixFQUNEO1FBQ0UsVUFBVSxFQUFFLElBQUk7UUFDaEIsV0FBVyxFQUFFLElBQUk7UUFDakIsU0FBUyxFQUFFLG1CQUFtQjtLQUMvQixDQUNGLENBQUE7SUFFRCxnQkFBZ0IsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUN0QyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFBO0lBQzVFLENBQUMsQ0FBQTtJQUVELE9BQU8sZ0JBQWdCLENBQUE7QUFDekIsQ0FBQyxDQUFBIn0=