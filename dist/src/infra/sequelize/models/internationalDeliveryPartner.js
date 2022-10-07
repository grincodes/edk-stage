module.exports = function (sequelize, DataTypes) {
    const InternationalDeliveryPartner = sequelize.define("international_delivery_partner", {
        international_delivery_partner_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        international_delivery_partner_name: {
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
        tableName: "international_delivery_partner"
    });
    InternationalDeliveryPartner.associate = (models) => {
        InternationalDeliveryPartner.hasOne(models.Shop, { as: "Shop", foreignKey: "international_delivery_partner_id" });
    };
    return InternationalDeliveryPartner;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJuYXRpb25hbERlbGl2ZXJ5UGFydG5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYS9zZXF1ZWxpemUvbW9kZWxzL2ludGVybmF0aW9uYWxEZWxpdmVyeVBhcnRuZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLFNBQVMsRUFBRSxTQUFTO0lBQzdDLE1BQU0sNEJBQTRCLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FDbkQsZ0NBQWdDLEVBQ2hDO1FBQ0UsaUNBQWlDLEVBQUU7WUFDakMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLFlBQVksRUFBRSxTQUFTLENBQUMsTUFBTTtZQUM5QixTQUFTLEVBQUUsS0FBSztZQUNoQixVQUFVLEVBQUUsSUFBSTtTQUNqQjtRQUNELG1DQUFtQyxFQUFFO1lBQ25DLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtZQUN0QixTQUFTLEVBQUUsS0FBSztTQUNqQjtRQUVELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTLENBQUMsT0FBTztZQUN2QixTQUFTLEVBQUUsS0FBSztZQUNoQixZQUFZLEVBQUUsS0FBSztTQUNwQjtLQUNGLEVBQ0Q7UUFDRSxVQUFVLEVBQUUsSUFBSTtRQUNoQixXQUFXLEVBQUUsSUFBSTtRQUNqQixTQUFTLEVBQUUsZ0NBQWdDO0tBQzVDLENBQ0YsQ0FBQTtJQUVELDRCQUE0QixDQUFDLFNBQVMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQ2xELDRCQUE0QixDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsbUNBQW1DLEVBQUUsQ0FBQyxDQUFBO0lBQ25ILENBQUMsQ0FBQTtJQUVELE9BQU8sNEJBQTRCLENBQUE7QUFDckMsQ0FBQyxDQUFBIn0=