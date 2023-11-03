"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAuthMiddleware = void 0;
const factories_1 = require("@/main/factories");
const middlewares_1 = require("@/presentation/middlewares");
const makeAuthMiddleware = (role) => {
    return new middlewares_1.AuthMiddleware((0, factories_1.makeDbLoadAccountByToken)(), role);
};
exports.makeAuthMiddleware = makeAuthMiddleware;
//# sourceMappingURL=auth-middleware-factory.js.map