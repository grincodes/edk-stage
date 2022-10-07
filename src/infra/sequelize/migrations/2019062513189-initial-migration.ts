"use strict"
import runner from "../runner"

export default {
  up: (queryInterface, Sequelize) => {
    const CREATE_UPDATE_TIMESTAMP = {
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
      },
    }

    const CREATE_BASE_USER = () =>
      queryInterface.createTable("base_user", {
        base_user_id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        first_name: {
          type: Sequelize.STRING(250),
          allowNull: false,
        },
        last_name: {
          type: Sequelize.STRING(250),
          allowNull: false,
        },
        user_email: {
          type: Sequelize.STRING(250),
          allowNull: false,
          unique: true,
        },
        user_password: {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: null,
        },
        profile_picture: {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: null,
        },
        facebook_id: {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: null,
        },
        google_id: {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: null,
        },
        is_email_verified: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },

        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
        },
      })

    const CREATE_ROLE = () =>
      queryInterface.createTable("role", {
        role_id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        role_user_id: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: "base_user",
            key: "base_user_id",
          },
          onDelete: "cascade",
          onUpdate: "cascade",
        },
        role: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
        },
      })

    const CREATE_BUSINESS = () =>
      queryInterface.createTable("business", {
        business_id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        business_type: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        business_description: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        business_name: {
          type: Sequelize.STRING(250),
          allowNull: false,
        },
        business_email: {
          type: Sequelize.STRING(250),
          unique: true,
          allowNull: false,
        },
        business_phone: {
          type: Sequelize.STRING(250),
          allowNull: false,
          unique: true,
        },
        business_logo: {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: null,
        },
        business_industry: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        business_tax_id: {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: null,
          unique: true,
        },
        is_email_verified: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
        },
      })

    const CREATE_BUSINESS_DOCUMENT = () =>
      queryInterface.createTable("business_document", {
        business_document_id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },

        business_id: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: "business",
            key: "business_id",
          },
          onDelete: "cascade",
          onUpdate: "cascade",
        },
        document_url: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        document_type: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
        },
      })

    const CREATE_BUSINESS_SUBUSER = () =>
      queryInterface.createTable("business_sub_user", {
        business_sub_user_id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },

        business_id: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: "business",
            key: "business_id",
          },
          onDelete: "cascade",
          onUpdate: "cascade",
        },
        user_id: {
          type: Sequelize.UUID,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
        },
      })

    const CREATE_BUSINESS_LOCATION = () =>
      queryInterface.createTable("business_location", {
        business_location_id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        business_id: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: "business",
            key: "business_id",
          },
          onDelete: "cascade",
          onUpdate: "cascade",
        },
        address: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        state: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        city: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        country: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
        },
      })

    const LOCAL_DELIVERY_PARTNER = () =>
      queryInterface.createTable("local_delivery_partner", {
        local_delivery_partner_id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        local_delivery_partner_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        is_active: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        ...CREATE_UPDATE_TIMESTAMP,
      })

    const INTERNATIONAL_DELIVERY_PARTNER = () =>
      queryInterface.createTable("international_delivery_partner", {
        international_delivery_partner_id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        international_delivery_partner_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        is_active: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        ...CREATE_UPDATE_TIMESTAMP,
      })

    const CREATE_SHOP_CATEGORY = () =>
      queryInterface.createTable("shop_category", {
        shop_category_id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        shop_category_name: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        shop_category_slug: {
          type: Sequelize.STRING(250),
          allowNull: false,
          unique: true,
        },
        is_active: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        ...CREATE_UPDATE_TIMESTAMP,
      })

    const CREATE_SHOP = () =>
      queryInterface.createTable("shop", {
        shop_id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },

        shop_category_id: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: "shop_category",
            key: "shop_category_id",
          },
          onUpdate: "cascade",
        },

        shop_name: {
          type: Sequelize.STRING(250),
          allowNull: false,
        },
        shop_email: {
          type: Sequelize.STRING(250),
          allowNull: false,
          unique: true,
        },
        shop_phone: {
          type: Sequelize.STRING(250),
          allowNull: false,
          unique: true,
        },
        shop_logo: {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: null,
        },
        shop_owner_type: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        shop_owner_id: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: "base_user",
            key: "base_user_id",
          },
          onDelete: "cascade",
          onUpdate: "cascade",
        },

        local_delivery_partner_id: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: "local_delivery_partner",
            key: "local_delivery_partner_id",
          },
          onUpdate: "cascade",
        },

        international_delivery_partner_id: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: "international_delivery_partner",
            key: "international_delivery_partner_id",
          },
          onUpdate: "cascade",
        },

        is_verified: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
        },
      })

    const CREATE_SHOP_DOCUMENT = () =>
      queryInterface.createTable("shop_document", {
        shop_document_id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },

        shop_id: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: "shop",
            key: "shop_id",
          },
          onDelete: "cascade",
          onUpdate: "cascade",
        },
        document_url: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        document_type: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
        },
      })

    const CREATE_SHOP_LOCATION = () =>
      queryInterface.createTable("shop_location", {
        shop_location_id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },

        shop_id: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: "shop",
            key: "shop_id",
          },
          onDelete: "cascade",
          onUpdate: "cascade",
        },
        address: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        state: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        city: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        country: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        lng: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        lat: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
        },
      })

    const CREATE_PRODUCT_CATEGORY = () =>
      queryInterface.createTable("product_category", {
        category_id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        product_type_id: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: "product_type",
            key: "product_type_id",
          },
          onDelete: "cascade",
          onUpdate: "cascade",
        },
        category_name: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        category_slug: {
          type: Sequelize.STRING(250),
          allowNull: false,
          unique: true,
        },
        is_active: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        ...CREATE_UPDATE_TIMESTAMP,
      })

    const CREATE_PRODUCT_SUBCATEGORY = () =>
      queryInterface.createTable("product_sub_category", {
        subcategory_id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        category_id: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: "product_category",
            key: "category_id",
          },
          onDelete: "cascade",
          onUpdate: "cascade",
        },
        subcategory_name: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        subcategory_slug: {
          type: Sequelize.STRING(250),
          allowNull: false,
          unique: true,
        },
        is_active: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        ...CREATE_UPDATE_TIMESTAMP,
      })

    const CREATE_PRODUCT_TYPE = () =>
      queryInterface.createTable("product_type", {
        product_type_id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },

        product_type_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        ...CREATE_UPDATE_TIMESTAMP,
      })

    const CREATE_PRODUCT_BRAND = () =>
      queryInterface.createTable("product_brand", {
        product_brand_id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        product_brand_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        ...CREATE_UPDATE_TIMESTAMP,
      })

    const CREATE_PRODUCT = () =>
      queryInterface.createTable("product", {
        product_id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        category_id: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: "product_category",
            key: "category_id",
          },
          onUpdate: "cascade",
        },

        product_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        product_description: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        product_slug: {
          type: Sequelize.STRING(250),
          allowNull: false,
        },

        product_web_id: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        shop_id: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: "shop",
            key: "shop_id",
          },
          onDelete: "cascade",
          onUpdate: "cascade",
        },

        is_active: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        ...CREATE_UPDATE_TIMESTAMP,
      })

    const CREATE_PRODUCT_INVENTORY = () =>
      queryInterface.createTable("product_inventory", {
        product_inventory_id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },

        sku: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        variant_name: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },

        product_id: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: "product",
            key: "product_id",
          },
          onDelete: "cascade",
          onUpdate: "cascade",
        },

        product_brand_id: {
          type: Sequelize.UUID,
          allowNull: true,
          references: {
            model: "product_brand",
            key: "product_brand_id",
          },
          onDelete: "cascade",
          onUpdate: "cascade",
        },

        product_weight: {
          type: Sequelize.DECIMAL(8, 2),
          allowNull: false,
        },

        retail_price: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },

        store_price: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },

        sale_price: {
          type: Sequelize.INTEGER,
          allowNull: true,
          defaultValue: 0,
        },
        currency: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        is_active: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: true,
        },
        ...CREATE_UPDATE_TIMESTAMP,
      })

    const CREATE_PRODUCT_ATTRIBUTE = () =>
      queryInterface.createTable("product_attribute", {
        attribute_id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        category_id: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: "product_category",
            key: "category_id",
          },
          onDelete: "cascade",
          onUpdate: "cascade",
        },

        attribute_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        attribute_description: {
          type: Sequelize.STRING(250),
          allowNull: false,
        },
        ...CREATE_UPDATE_TIMESTAMP,
      })

    const CREATE_PRODUCT_ATTRIBUTE_VALUE = () =>
      queryInterface.createTable("product_attribute_value", {
        attribute_value_id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        attribute_id: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: "product_attribute",
            key: "attribute_id",
          },
          onDelete: "cascade",
          onUpdate: "cascade",
        },
        attribute_value: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        attribute_value_sequence: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        ...CREATE_UPDATE_TIMESTAMP,
      })

    const CREATE_PRODUCT_IMAGE = () =>
      queryInterface.createTable("product_image", {
        image_id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },

        variant_name: {
          type: Sequelize.STRING,
        },

        image_url: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        alt_text: {
          type: Sequelize.STRING(250),
          allowNull: false,
        },
        thumbnail_url: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        ...CREATE_UPDATE_TIMESTAMP,
      })

    const ADD_FORIEGN_KEY_PROD_INVENTORY = () =>
      queryInterface.addConstraint("product_image", {
        fields: ["variant_name"],
        type: "foreign key",
        references: {
          table: "product_inventory",
          field: "variant_name",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      })

    const CREATE_PRODUCT_360_VIDEO = () =>
      queryInterface.createTable("product_360_video", {
        v360_id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        product_id: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: "product",
            key: "product_id",
          },
          onDelete: "cascade",
          onUpdate: "cascade",
        },
        url: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        ...CREATE_UPDATE_TIMESTAMP,
      })

    const CREATE_PRODUCT_STOCK = () =>
      queryInterface.createTable("product_stock", {
        stock_id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        product_inventory_id: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: "product_inventory",
            key: "product_inventory_id",
          },
          onDelete: "cascade",
          onUpdate: "cascade",
        },
        units: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        units_sold: {
          type: Sequelize.INTEGER,
          defaultValue: 0,
          allowNull: false,
        },
        ...CREATE_UPDATE_TIMESTAMP,
      })

    const CREATE_TAG_PRODUCT_ATTRIBUTE_VALUE = () =>
      queryInterface.createTable("tag_product_attribute_value", {
        tag_product_attr_value_id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        product_inventory_id: {
          type: Sequelize.UUID,
          primaryKey: false,
          references: {
            model: "product_inventory",
            key: "product_inventory_id",
          },
          onDelete: "cascade",
          onUpdate: "cascade",
          unique: "unique-product-per-attributes",
        },
        attribute_value_id: {
          type: Sequelize.UUID,
          primaryKey: false,
          references: {
            model: "product_attribute_value",
            key: "attribute_value_id",
          },
        },
        ...CREATE_UPDATE_TIMESTAMP,
      })

    const CREATE_TAG_PRODUCT_CATEGORY = () =>
      queryInterface.createTable("tag_product_category", {
        tag_product_category_id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        product_id: {
          type: Sequelize.UUID,
          primaryKey: false,
          references: {
            model: "product",
            key: "product_id",
          },
          onDelete: "cascade",
          onUpdate: "cascade",
          unique: "unique-category-per-product",
        },
        category_id: {
          type: Sequelize.UUID,
          primaryKey: false,
          references: {
            model: "product_category",
            key: "category_id",
          },
          onDelete: "cascade",
          onUpdate: "cascade",
          unique: "unique-category-per-product",
        },
        ...CREATE_UPDATE_TIMESTAMP,
      })

    const CREATE_SHOPPER = () =>
      queryInterface.createTable("shopper", {
        shopper_id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },

        shopper_username: {
          type: Sequelize.STRING(250),
          allowNull: false,
          unique: true,
        },

        shopper_phone: {
          type: Sequelize.STRING(250),
          allowNull: false,
          unique: true,
        },

        shopper_dob: {
          type: Sequelize.DATE,
          allowNull: false,
          unique: true,
        },

        shopper_user_id: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: "base_user",
            key: "base_user_id",
          },
          onDelete: "cascade",
          onUpdate: "cascade",
        },
        ...CREATE_UPDATE_TIMESTAMP,
      })

    const CREATE_SHOPPER_LOCATION = () =>
      queryInterface.createTable("shopper_address", {
        shopper_address_id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },

        shopper_id: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: "shopper",
            key: "shopper_id",
          },
          onDelete: "cascade",
          onUpdate: "cascade",
        },
        address: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        state: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        city: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        country: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        lng: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        lat: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        is_default: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        ...CREATE_UPDATE_TIMESTAMP,
      })

    return runner.run([
      () => CREATE_BASE_USER(),
      () => CREATE_ROLE(),
      () => CREATE_BUSINESS(),
      () => CREATE_BUSINESS_DOCUMENT(),
      () => CREATE_BUSINESS_SUBUSER(),
      () => CREATE_BUSINESS_LOCATION(),
      () => CREATE_PRODUCT_TYPE(),
      () => CREATE_PRODUCT_CATEGORY(),
      () => LOCAL_DELIVERY_PARTNER(),
      () => INTERNATIONAL_DELIVERY_PARTNER(),
      () => CREATE_SHOP_CATEGORY(),
      () => CREATE_SHOP(),
      () => CREATE_SHOP_DOCUMENT(),
      () => CREATE_SHOP_LOCATION(),
      () => CREATE_PRODUCT_SUBCATEGORY(),
      () => CREATE_PRODUCT_BRAND(),
      () => CREATE_PRODUCT(),
      () => CREATE_PRODUCT_ATTRIBUTE(),
      () => CREATE_PRODUCT_ATTRIBUTE_VALUE(),
      () => CREATE_PRODUCT_INVENTORY(),
      () => CREATE_PRODUCT_IMAGE(),
      // () => ADD_FORIEGN_KEY_PROD_INVENTORY(),
      () => CREATE_PRODUCT_360_VIDEO(),
      () => CREATE_PRODUCT_STOCK(),
      () => CREATE_TAG_PRODUCT_ATTRIBUTE_VALUE(),
      () => CREATE_TAG_PRODUCT_CATEGORY(),
      () => CREATE_SHOPPER(),
      () => CREATE_SHOPPER_LOCATION(),
    ])
  },

  down: (queryInterface, Sequelize) => {
    return runner.run([
      () => queryInterface.dropTable("base_user"),
      () => queryInterface.dropTable("role"),
      () => queryInterface.dropTable("business_document"),
      () => queryInterface.dropTable("business_sub_user"),
      () => queryInterface.dropTable("business_location"),
      () => queryInterface.dropTable("business"),
      () => queryInterface.dropTable("product_category"),
      () => queryInterface.dropTable("local_delivery_partner"),
      () => queryInterface.dropTable("international_delivery_partner"),
      () => queryInterface.dropTable("shop_category"),
      () => queryInterface.dropTable("shop"),
      () => queryInterface.dropTable("shop_document"),
      () => queryInterface.dropTable("shop_location"),
      () => queryInterface.dropTable("shop_logistics"),
      () => queryInterface.dropTable("product_sub_category"),
      () => queryInterface.dropTable("product_type"),
      () => queryInterface.dropTable("product_brand"),
      () => queryInterface.dropTable("product_attribute"),
      () => queryInterface.dropTable("product_attribute_value"),
      () => queryInterface.dropTable("product_image"),
      () => queryInterface.dropTable("product_360_video"),
      () => queryInterface.dropTable("product_stock"),
      () => queryInterface.dropTable("tag_product_attribute_value"),
      () => queryInterface.dropTable("tag_product_category"),
      () => queryInterface.dropTable("shopper"),
      () => queryInterface.dropTable("shopper_address"),
    ])
  },
}
