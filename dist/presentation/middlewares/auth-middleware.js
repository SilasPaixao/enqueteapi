"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const helpers_1 = require("@/presentation/helpers");
const errors_1 = require("@/presentation/errors");
class AuthMiddleware {
    constructor(loadAccountByToken, role) {
        this.loadAccountByToken = loadAccountByToken;
        this.role = role;
    }
    async handle(request) {
        try {
            const { accessToken } = request;
            if (accessToken) {
                const account = await this.loadAccountByToken.load(accessToken, this.role);
                if (account) {
                    return (0, helpers_1.ok)({ accountId: account.id });
                }
            }
            return (0, helpers_1.forbidden)(new errors_1.AccessDeniedError());
        }
        catch (error) {
            return (0, helpers_1.serverError)(error);
        }
    }
}
exports.AuthMiddleware = AuthMiddleware;
//# sourceMappingURL=auth-middleware.js.map