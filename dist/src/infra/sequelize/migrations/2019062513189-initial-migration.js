"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const runner_1 = __importDefault(require("../runner"));
exports.default = {
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
        };
        const CREATE_BASE_USER = () => queryInterface.createTable("base_user", {
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
        });
        const CREATE_ROLE = () => queryInterface.createTable("role", {
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
        });
        const CREATE_BUSINESS = () => queryInterface.createTable("business", {
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
        });
        const CREATE_BUSINESS_DOCUMENT = () => queryInterface.createTable("business_document", {
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
        });
        const CREATE_BUSINESS_SUBUSER = () => queryInterface.createTable("business_sub_user", {
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
        });
        const CREATE_BUSINESS_LOCATION = () => queryInterface.createTable("business_location", {
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
        });
        const LOCAL_DELIVERY_PARTNER = () => queryInterface.createTable("local_delivery_partner", Object.assign({ local_delivery_partner_id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true,
            }, local_delivery_partner_name: {
                type: Sequelize.STRING,
                allowNull: false,
            }, is_active: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            } }, CREATE_UPDATE_TIMESTAMP));
        const INTERNATIONAL_DELIVERY_PARTNER = () => queryInterface.createTable("international_delivery_partner", Object.assign({ international_delivery_partner_id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true,
            }, international_delivery_partner_name: {
                type: Sequelize.STRING,
                allowNull: false,
            }, is_active: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            } }, CREATE_UPDATE_TIMESTAMP));
        const CREATE_SHOP_CATEGORY = () => queryInterface.createTable("shop_category", Object.assign({ shop_category_id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true,
            }, shop_category_name: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            }, shop_category_slug: {
                type: Sequelize.STRING(250),
                allowNull: false,
                unique: true,
            }, is_active: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            } }, CREATE_UPDATE_TIMESTAMP));
        const CREATE_SHOP = () => queryInterface.createTable("shop", {
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
        });
        const CREATE_SHOP_DOCUMENT = () => queryInterface.createTable("shop_document", {
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
        });
        const CREATE_SHOP_LOCATION = () => queryInterface.createTable("shop_location", {
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
        });
        const CREATE_PRODUCT_CATEGORY = () => queryInterface.createTable("product_category", Object.assign({ category_id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true,
            }, product_type_id: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: "product_type",
                    key: "product_type_id",
                },
                onDelete: "cascade",
                onUpdate: "cascade",
            }, category_name: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            }, category_slug: {
                type: Sequelize.STRING(250),
                allowNull: false,
                unique: true,
            }, is_active: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            } }, CREATE_UPDATE_TIMESTAMP));
        const CREATE_PRODUCT_SUBCATEGORY = () => queryInterface.createTable("product_sub_category", Object.assign({ subcategory_id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true,
            }, category_id: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: "product_category",
                    key: "category_id",
                },
                onDelete: "cascade",
                onUpdate: "cascade",
            }, subcategory_name: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            }, subcategory_slug: {
                type: Sequelize.STRING(250),
                allowNull: false,
                unique: true,
            }, is_active: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            } }, CREATE_UPDATE_TIMESTAMP));
        const CREATE_PRODUCT_TYPE = () => queryInterface.createTable("product_type", Object.assign({ product_type_id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true,
            }, product_type_name: {
                type: Sequelize.STRING,
                allowNull: false,
            } }, CREATE_UPDATE_TIMESTAMP));
        const CREATE_PRODUCT_BRAND = () => queryInterface.createTable("product_brand", Object.assign({ product_brand_id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true,
            }, product_brand_name: {
                type: Sequelize.STRING,
                allowNull: false,
            } }, CREATE_UPDATE_TIMESTAMP));
        const CREATE_PRODUCT = () => queryInterface.createTable("product", Object.assign({ product_id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true,
            }, category_id: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: "product_category",
                    key: "category_id",
                },
                onUpdate: "cascade",
            }, product_name: {
                type: Sequelize.STRING,
                allowNull: false,
            }, product_description: {
                type: Sequelize.STRING,
                allowNull: false,
            }, product_slug: {
                type: Sequelize.STRING(250),
                allowNull: false,
            }, product_web_id: {
                type: Sequelize.STRING,
                allowNull: false,
            }, shop_id: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: "shop",
                    key: "shop_id",
                },
                onDelete: "cascade",
                onUpdate: "cascade",
            }, is_active: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            } }, CREATE_UPDATE_TIMESTAMP));
        const CREATE_PRODUCT_INVENTORY = () => queryInterface.createTable("product_inventory", Object.assign({ product_inventory_id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true,
            }, sku: {
                type: Sequelize.STRING,
                allowNull: false,
            }, variant_name: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            }, product_id: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: "product",
                    key: "product_id",
                },
                onDelete: "cascade",
                onUpdate: "cascade",
            }, product_brand_id: {
                type: Sequelize.UUID,
                allowNull: true,
                references: {
                    model: "product_brand",
                    key: "product_brand_id",
                },
                onDelete: "cascade",
                onUpdate: "cascade",
            }, product_weight: {
                type: Sequelize.DECIMAL(8, 2),
                allowNull: false,
            }, retail_price: {
                type: Sequelize.INTEGER,
                allowNull: false,
            }, store_price: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
            }, sale_price: {
                type: Sequelize.INTEGER,
                allowNull: true,
                defaultValue: 0,
            }, currency: {
                type: Sequelize.STRING,
                allowNull: false,
            }, is_active: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: true,
            } }, CREATE_UPDATE_TIMESTAMP));
        const CREATE_PRODUCT_ATTRIBUTE = () => queryInterface.createTable("product_attribute", Object.assign({ attribute_id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true,
            }, category_id: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: "product_category",
                    key: "category_id",
                },
                onDelete: "cascade",
                onUpdate: "cascade",
            }, attribute_name: {
                type: Sequelize.STRING,
                allowNull: false,
            }, attribute_description: {
                type: Sequelize.STRING(250),
                allowNull: false,
            } }, CREATE_UPDATE_TIMESTAMP));
        const CREATE_PRODUCT_ATTRIBUTE_VALUE = () => queryInterface.createTable("product_attribute_value", Object.assign({ attribute_value_id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true,
            }, attribute_id: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: "product_attribute",
                    key: "attribute_id",
                },
                onDelete: "cascade",
                onUpdate: "cascade",
            }, attribute_value: {
                type: Sequelize.STRING,
                allowNull: false,
            }, attribute_value_sequence: {
                type: Sequelize.INTEGER,
                allowNull: false,
            } }, CREATE_UPDATE_TIMESTAMP));
        const CREATE_PRODUCT_IMAGE = () => queryInterface.createTable("product_image", Object.assign({ image_id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true,
            }, variant_name: {
                type: Sequelize.STRING,
            }, image_url: {
                type: Sequelize.STRING,
                allowNull: false,
            }, alt_text: {
                type: Sequelize.STRING(250),
                allowNull: false,
            }, thumbnail_url: {
                type: Sequelize.STRING,
                allowNull: false,
            } }, CREATE_UPDATE_TIMESTAMP));
        const ADD_FORIEGN_KEY_PROD_INVENTORY = () => queryInterface.addConstraint("product_image", {
            fields: ["variant_name"],
            type: "foreign key",
            references: {
                table: "product_inventory",
                field: "variant_name",
            },
            onDelete: "cascade",
            onUpdate: "cascade",
        });
        const CREATE_PRODUCT_360_VIDEO = () => queryInterface.createTable("product_360_video", Object.assign({ v360_id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true,
            }, product_id: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: "product",
                    key: "product_id",
                },
                onDelete: "cascade",
                onUpdate: "cascade",
            }, url: {
                type: Sequelize.STRING,
                allowNull: false,
            } }, CREATE_UPDATE_TIMESTAMP));
        const CREATE_PRODUCT_STOCK = () => queryInterface.createTable("product_stock", Object.assign({ stock_id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true,
            }, product_inventory_id: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: "product_inventory",
                    key: "product_inventory_id",
                },
                onDelete: "cascade",
                onUpdate: "cascade",
            }, units: {
                type: Sequelize.STRING,
                allowNull: false,
            }, units_sold: {
                type: Sequelize.INTEGER,
                defaultValue: 0,
                allowNull: false,
            } }, CREATE_UPDATE_TIMESTAMP));
        const CREATE_TAG_PRODUCT_ATTRIBUTE_VALUE = () => queryInterface.createTable("tag_product_attribute_value", Object.assign({ tag_product_attr_value_id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true,
            }, product_inventory_id: {
                type: Sequelize.UUID,
                primaryKey: false,
                references: {
                    model: "product_inventory",
                    key: "product_inventory_id",
                },
                onDelete: "cascade",
                onUpdate: "cascade",
                unique: "unique-product-per-attributes",
            }, attribute_value_id: {
                type: Sequelize.UUID,
                primaryKey: false,
                references: {
                    model: "product_attribute_value",
                    key: "attribute_value_id",
                },
            } }, CREATE_UPDATE_TIMESTAMP));
        const CREATE_TAG_PRODUCT_CATEGORY = () => queryInterface.createTable("tag_product_category", Object.assign({ tag_product_category_id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true,
            }, product_id: {
                type: Sequelize.UUID,
                primaryKey: false,
                references: {
                    model: "product",
                    key: "product_id",
                },
                onDelete: "cascade",
                onUpdate: "cascade",
                unique: "unique-category-per-product",
            }, category_id: {
                type: Sequelize.UUID,
                primaryKey: false,
                references: {
                    model: "product_category",
                    key: "category_id",
                },
                onDelete: "cascade",
                onUpdate: "cascade",
                unique: "unique-category-per-product",
            } }, CREATE_UPDATE_TIMESTAMP));
        const CREATE_SHOPPER = () => queryInterface.createTable("shopper", Object.assign({ shopper_id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true,
            }, shopper_username: {
                type: Sequelize.STRING(250),
                allowNull: false,
                unique: true,
            }, shopper_phone: {
                type: Sequelize.STRING(250),
                allowNull: false,
                unique: true,
            }, shopper_dob: {
                type: Sequelize.DATE,
                allowNull: false,
                unique: true,
            }, shopper_user_id: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: "base_user",
                    key: "base_user_id",
                },
                onDelete: "cascade",
                onUpdate: "cascade",
            } }, CREATE_UPDATE_TIMESTAMP));
        const CREATE_SHOPPER_LOCATION = () => queryInterface.createTable("shopper_address", Object.assign({ shopper_address_id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true,
            }, shopper_id: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: "shopper",
                    key: "shopper_id",
                },
                onDelete: "cascade",
                onUpdate: "cascade",
            }, address: {
                type: Sequelize.STRING,
                allowNull: false,
            }, state: {
                type: Sequelize.STRING,
                allowNull: false,
            }, city: {
                type: Sequelize.STRING,
                allowNull: false,
            }, country: {
                type: Sequelize.STRING,
                allowNull: false,
            }, lng: {
                type: Sequelize.FLOAT,
                allowNull: false,
            }, lat: {
                type: Sequelize.FLOAT,
                allowNull: false,
            }, is_default: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            } }, CREATE_UPDATE_TIMESTAMP));
        return runner_1.default.run([
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
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return runner_1.default.run([
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
        ]);
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAxOTA2MjUxMzE4OS1pbml0aWFsLW1pZ3JhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYS9zZXF1ZWxpemUvbWlncmF0aW9ucy8yMDE5MDYyNTEzMTg5LWluaXRpYWwtbWlncmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQTs7Ozs7QUFDWix1REFBOEI7QUFFOUIsa0JBQWU7SUFDYixFQUFFLEVBQUUsQ0FBQyxjQUFjLEVBQUUsU0FBUyxFQUFFLEVBQUU7UUFDaEMsTUFBTSx1QkFBdUIsR0FBRztZQUM5QixVQUFVLEVBQUU7Z0JBQ1YsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO2dCQUNwQixTQUFTLEVBQUUsS0FBSztnQkFDaEIsWUFBWSxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUM7YUFDckQ7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO2dCQUNwQixTQUFTLEVBQUUsS0FBSztnQkFDaEIsWUFBWSxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsK0NBQStDLENBQUM7YUFDakY7U0FDRixDQUFBO1FBRUQsTUFBTSxnQkFBZ0IsR0FBRyxHQUFHLEVBQUUsQ0FDNUIsY0FBYyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUU7WUFDdEMsWUFBWSxFQUFFO2dCQUNaLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtnQkFDcEIsWUFBWSxFQUFFLFNBQVMsQ0FBQyxNQUFNO2dCQUM5QixTQUFTLEVBQUUsS0FBSztnQkFDaEIsVUFBVSxFQUFFLElBQUk7YUFDakI7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUMzQixTQUFTLEVBQUUsS0FBSzthQUNqQjtZQUNELFNBQVMsRUFBRTtnQkFDVCxJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFH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