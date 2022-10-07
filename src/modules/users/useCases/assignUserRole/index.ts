import { AssignUserRole } from "./AssignUserRole"
import { roleRepo } from "../../repos"

const assignUserRole = new AssignUserRole(roleRepo)

export { assignUserRole }
