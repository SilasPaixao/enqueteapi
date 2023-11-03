"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSignUpController = void 0;
const factories_1 = require("@/main/factories");
const controllers_1 = require("@/presentation/controllers");
const makeSignUpController = () => {
    const controller = new controllers_1.SignUpController((0, factories_1.makeDbAddAccount)(), (0, factories_1.makeSignUpValidation)(), (0, factories_1.makeDbAuthentication)());
    return (0, factories_1.makeLogControllerDecorator)(controller);
};
exports.makeSignUpController = makeSignUpController;
//# sourceMappingURL=signup-controller-factory.js.map