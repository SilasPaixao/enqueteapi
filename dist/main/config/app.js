"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupApp = void 0;
const middlewares_1 = __importDefault(require("@/main/config/middlewares"));
const routes_1 = __importDefault(require("@/main/config/routes"));
const static_files_1 = __importDefault(require("@/main/config/static-files"));
const swagger_1 = __importDefault(require("@/main/config/swagger"));
const apollo_1 = require("@/main/graphql/apollo");
const express_1 = __importDefault(require("express"));
const setupApp = async () => {
    const app = (0, express_1.default)();
    (0, static_files_1.default)(app);
    (0, swagger_1.default)(app);
    (0, middlewares_1.default)(app);
    (0, routes_1.default)(app);
    const server = (0, apollo_1.setupApolloServer)();
    await server.start();
    server.applyMiddleware({ app });
    return app;
};
exports.setupApp = setupApp;
//# sourceMappingURL=app.js.map