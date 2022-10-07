"use strict"

export default {
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
       
    ])
  },

  async down(queryInterface, Sequelize) {
  
    //  await queryInterface.dropTable('product_attribute');
     
  },
}
