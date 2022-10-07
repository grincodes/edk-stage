"use strict";
/**
 * @name sequelize/runner.ts
 * @desc The reason why this file exists comes from my experience using
 * sequelize for a couple years. Sometimes when we're running migrations,
 * we might encounter errors that we're OK with occuring such as attempting to
 * seed the same values or trying to remove a field that was already removed.
 *
 * I'm OK with these errors not stopping the migration script entirely.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    run: async (commands) => {
        for (const command of commands) {
            try {
                await command();
            }
            catch (err) {
                if (err.original) {
                    switch (err.original.code) {
                        /**
                         * This is an error that we can run into while seeding the same
                         * data. It's passable.
                         */
                        case "ER_DUP_ENTRY":
                            console.log(`>>> Passable error occurred: ER_DUP_ENTRY`);
                            return;
                        /**
                         * This is an error that we can run into where the same
                         * field name already exists.
                         */
                        case "ER_DUP_FIELDNAME":
                            console.log(`>>> Passable error occurred: ER_DUP_FIELDNAME`);
                            return;
                        /**
                         * If the field doesn't exist and we're trying to drop it,
                         * that's cool. We can pass this.
                         */
                        case "ER_CANT_DROP_FIELD_OR_KEY":
                            console.log(`>>> Passable error occurred: ER_CANT_DROP_FIELD_OR_KEY`);
                            return;
                        case "SequelizeUnknownConstraintError":
                            console.log(`>>> Passable error. Trying to remove constraint that's already been removed.`);
                            return;
                        default:
                            console.log(err);
                            throw new Error(err);
                    }
                }
            }
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVubmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2luZnJhL3NlcXVlbGl6ZS9ydW5uZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7OztHQVFHOztBQUVILGtCQUFlO0lBQ2IsR0FBRyxFQUFFLEtBQUssRUFBRSxRQUFvQixFQUFFLEVBQUU7UUFDbEMsS0FBSyxNQUFNLE9BQU8sSUFBSSxRQUFRLEVBQUU7WUFDOUIsSUFBSTtnQkFDRixNQUFNLE9BQU8sRUFBRSxDQUFBO2FBQ2hCO1lBQUMsT0FBTyxHQUFHLEVBQUU7Z0JBQ1osSUFBSSxHQUFHLENBQUMsUUFBUSxFQUFFO29CQUNoQixRQUFRLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFO3dCQUN6Qjs7OzJCQUdHO3dCQUVILEtBQUssY0FBYzs0QkFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFBOzRCQUN4RCxPQUFNO3dCQUVSOzs7MkJBR0c7d0JBRUgsS0FBSyxrQkFBa0I7NEJBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0NBQStDLENBQUMsQ0FBQTs0QkFDNUQsT0FBTTt3QkFFUjs7OzJCQUdHO3dCQUVILEtBQUssMkJBQTJCOzRCQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLHdEQUF3RCxDQUFDLENBQUE7NEJBQ3JFLE9BQU07d0JBRVIsS0FBSyxpQ0FBaUM7NEJBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEVBQThFLENBQUMsQ0FBQTs0QkFDM0YsT0FBTTt3QkFFUjs0QkFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBOzRCQUNoQixNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO3FCQUN2QjtpQkFDRjthQUNGO1NBQ0Y7SUFDSCxDQUFDO0NBQ0YsQ0FBQSJ9