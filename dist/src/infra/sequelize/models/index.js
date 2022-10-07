"use strict";
/*
 * app/models/index.js
 *
 * Loads all models and creates the relationships for those models and whatnot.
 * Date: 2018/02/05
 *
 * v1.0.0 - 2018/11/26 - Added co-op filters to AudienceFilters
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTransaction = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const config_1 = __importDefault(require("../config/config"));
const Sequelize = __importStar(require("sequelize"));
const sequelize = config_1.default.connection;
// turns base_user => BaseUser
function toCamelCase(str) {
    const _ = str.indexOf("_");
    if (~_) {
        return toCamelCase(str.substring(0, _) +
            str
                .substring(_ + 1)
                .substring(0, 1)
                .toUpperCase() +
            str.substring(_ + 2));
    }
    else {
        return str.substring(0, 1).toUpperCase() + str.substring(1);
    }
}
const models = {};
let modelsLoaded = false;
const createModels = () => {
    if (modelsLoaded)
        return models;
    // Get all models
    const modelsList = fs
        .readdirSync(path.resolve(__dirname, "./"))
        .filter((t) => ~t.indexOf(".js") && !~t.indexOf("index") && !~t.indexOf(".map"))
        .map((model) => require(path.join(__dirname, "/", model))(sequelize, Sequelize.DataTypes));
    // Camel case the models
    for (let i = 0; i < modelsList.length; i++) {
        const modelName = toCamelCase(modelsList[i].name);
        models[modelName] = modelsList[i];
    }
    // Create the relationships for the models;
    Object.keys(models).forEach((modelName) => {
        if (models[modelName].associate) {
            models[modelName].associate(models);
        }
    });
    models["sequelize"] = sequelize;
    models["sequelize"] = sequelize;
    modelsLoaded = true;
    return models;
};
exports.default = createModels();
async function createTransaction() {
    const t = await sequelize.transaction();
    return t;
}
exports.createTransaction = createTransaction;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvaW5mcmEvc2VxdWVsaXplL21vZGVscy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7R0FPRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFSCx1Q0FBd0I7QUFDeEIsMkNBQTRCO0FBQzVCLDhEQUFxQztBQUNyQyxxREFBc0M7QUFHdEMsTUFBTSxTQUFTLEdBQUcsZ0JBQU0sQ0FBQyxVQUFVLENBQUE7QUFFbkMsOEJBQThCO0FBQzlCLFNBQVMsV0FBVyxDQUFDLEdBQUc7SUFDdEIsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUMxQixJQUFJLENBQUMsQ0FBQyxFQUFFO1FBQ04sT0FBTyxXQUFXLENBQ2hCLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNqQixHQUFHO2lCQUNBLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNoQixTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDZixXQUFXLEVBQUU7WUFDaEIsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQ3ZCLENBQUE7S0FDRjtTQUFNO1FBQ0wsT0FBTyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQzVEO0FBQ0gsQ0FBQztBQUVELE1BQU0sTUFBTSxHQUFRLEVBQUUsQ0FBQTtBQUN0QixJQUFJLFlBQVksR0FBRyxLQUFLLENBQUE7QUFFeEIsTUFBTSxZQUFZLEdBQUcsR0FBRyxFQUFFO0lBQ3hCLElBQUksWUFBWTtRQUFFLE9BQU8sTUFBTSxDQUFBO0lBRS9CLGlCQUFpQjtJQUNqQixNQUFNLFVBQVUsR0FBRyxFQUFFO1NBQ2xCLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUMxQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMvRSxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUE7SUFFNUYsd0JBQXdCO0lBQ3hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzFDLE1BQU0sU0FBUyxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDakQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtLQUNsQztJQUVELDJDQUEyQztJQUMzQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFO1FBQ3hDLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsRUFBRTtZQUMvQixNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1NBQ3BDO0lBQ0gsQ0FBQyxDQUFDLENBQUE7SUFFRixNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsU0FBUyxDQUFBO0lBQy9CLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxTQUFTLENBQUE7SUFFL0IsWUFBWSxHQUFHLElBQUksQ0FBQTtJQUVuQixPQUFPLE1BQU0sQ0FBQTtBQUNmLENBQUMsQ0FBQTtBQUVELGtCQUFlLFlBQVksRUFBRSxDQUFBO0FBRXRCLEtBQUssVUFBVSxpQkFBaUI7SUFDckMsTUFBTSxDQUFDLEdBQUcsTUFBTSxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDdkMsT0FBTyxDQUFDLENBQUE7QUFDVixDQUFDO0FBSEQsOENBR0MifQ==