"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoginController = void 0;
const factories_1 = require("@/main/factories");
const controllers_1 = require("@/presentation/controllers");
const makeLoginController = () => {
    const controller = new controllers_1.LoginController((0, factories_1.makeDbAuthentication)(), (0, factories_1.makeLoginValidation)());
    return (0, factories_1.makeLogControllerDecorator)(controller);
};
exports.makeLoginController = makeLoginController;
//# sourceMappingURL=login-controller-factory.js.map