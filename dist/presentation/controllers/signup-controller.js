"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpController = void 0;
const helpers_1 = require("@/presentation/helpers");
const errors_1 = require("@/presentation/errors");
class SignUpController {
    constructor(addAccount, validation, authentication) {
        this.addAccount = addAccount;
        this.validation = validation;
        this.authentication = authentication;
    }
    async handle(request) {
        try {
            const error = this.validation.validate(request);
            if (error) {
                return (0, helpers_1.badRequest)(error);
            }
            const { name, email, password } = request;
            const isValid = await this.addAccount.add({
                name,
                email,
                password
            });
            if (!isValid) {
                return (0, helpers_1.forbidden)(new errors_1.EmailInUseError());
            }
            const authenticationModel = await this.authentication.auth({
                email,
                password
            });
            return (0, helpers_1.ok)(authenticationModel);
        }
        catch (error) {
            return (0, helpers_1.serverError)(error);
        }
    }
}
exports.SignUpController = SignUpController;
//# sourceMappingURL=signup-controller.js.map