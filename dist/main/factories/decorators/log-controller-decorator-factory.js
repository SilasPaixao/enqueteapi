"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLogControllerDecorator = void 0;
const decorators_1 = require("@/main/decorators");
const db_1 = require("@/infra/db");
const makeLogControllerDecorator = (controller) => {
    const logMongoRepository = new db_1.LogMongoRepository();
    return new decorators_1.LogControllerDecorator(controller, logMongoRepository);
};
exports.makeLogControllerDecorator = makeLogControllerDecorator;
//# sourceMappingURL=log-controller-decorator-factory.js.map