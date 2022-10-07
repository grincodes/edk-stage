import { UserRepo } from "./userRepo"
import models from "../../../infra/sequelize/models"
import { RoleRepo } from "./roleRepo"

const userRepo = new UserRepo(models)
const roleRepo = new RoleRepo(models)

export { userRepo, roleRepo }
