"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    async up(queryInterface, Sequelize) {
        return Promise.all([
        // queryInterface.dropTable("product_360_video"),
        //  queryInterface.createTable("product_360_video", {
        //   v360_id: {
        //     type: Sequelize.UUID,
        //     defaultValue: Sequelize.UUIDV4,
        //     allowNull: false,
        //     primaryKey: true,
        //   },
        //   product_id: {
        //     type: Sequelize.UUID,
        //     allowNull: false,
        //     references: {
        //       model: "product",
        //       key: "product_id",
        //     },
        //     onDelete: "cascade",
        //     onUpdate: "cascade",
        //   },
        //   url: {
        //     type: Sequelize.STRING,
        //     allowNull: false,
        //   },
        //    created_at: {
        //   type: Sequelize.DATE,
        //   allowNull: false,
        //   defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        // },
        // updated_at: {
        //   type: Sequelize.DATE,
        //   allowNull: false,
        //   defaultValue: Sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
        // },
        // })
        ]);
    },
    async down(queryInterface, Sequelize) {
        //  await queryInterface.dropTable('product_attribute');
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAyMjI4OTEzLWFsdGVyLXByb2R1Y3QtMzYwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2luZnJhL3NlcXVlbGl6ZS9taWdyYXRpb25zLzIwMjIyODkxMy1hbHRlci1wcm9kdWN0LTM2MC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUE7O0FBRVosa0JBQWU7SUFDYixLQUFLLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxTQUFTO1FBQ2hDLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUNqQixpREFBaUQ7UUFFakQscURBQXFEO1FBQ3JELGVBQWU7UUFDZiw0QkFBNEI7UUFDNUIsc0NBQXNDO1FBQ3RDLHdCQUF3QjtRQUN4Qix3QkFBd0I7UUFDeEIsT0FBTztRQUNQLGtCQUFrQjtRQUNsQiw0QkFBNEI7UUFDNUIsd0JBQXdCO1FBQ3hCLG9CQUFvQjtRQUNwQiwwQkFBMEI7UUFDMUIsMkJBQTJCO1FBQzNCLFNBQVM7UUFDVCwyQkFBMkI7UUFDM0IsMkJBQTJCO1FBQzNCLE9BQU87UUFDUCxXQUFXO1FBQ1gsOEJBQThCO1FBQzlCLHdCQUF3QjtRQUN4QixPQUFPO1FBQ1AsbUJBQW1CO1FBQ25CLDBCQUEwQjtRQUMxQixzQkFBc0I7UUFDdEIsMERBQTBEO1FBQzFELEtBQUs7UUFDTCxnQkFBZ0I7UUFDaEIsMEJBQTBCO1FBQzFCLHNCQUFzQjtRQUN0QixzRkFBc0Y7UUFDdEYsS0FBSztRQUVMLEtBQUs7U0FFTixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsU0FBUztRQUVsQyx3REFBd0Q7SUFFMUQsQ0FBQztDQUNGLENBQUEifQ==