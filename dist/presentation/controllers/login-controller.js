"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const helpers_1 = require("@/presentation/helpers");
class LoginController {
    constructor(authentication, validation) {
        this.authentication = authentication;
        this.validation = validation;
    }
    async handle(request) {
        try {
            const error = this.validation.validate(request);
            if (error) {
                return (0, helpers_1.badRequest)(error);
            }
            const authenticationModel = await this.authentication.auth(request);
            if (!authenticationModel) {
                return (0, helpers_1.unauthorized)();
            }
            return (0, helpers_1.ok)(authenticationModel);
        }
        catch (error) {
            return (0, helpers_1.serverError)(error);
        }
    }
}
exports.LoginController = LoginController;
//# sourceMappingURL=login-controller.js.map