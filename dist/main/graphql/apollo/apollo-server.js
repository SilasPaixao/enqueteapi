"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupApolloServer = void 0;
const type_defs_1 = __importDefault(require("@/main/graphql/type-defs"));
const resolvers_1 = __importDefault(require("@/main/graphql/resolvers"));
const directives_1 = require("@/main/graphql/directives");
const schema_1 = require("@graphql-tools/schema");
const apollo_server_express_1 = require("apollo-server-express");
const handleErrors = (response, errors) => {
    errors === null || errors === void 0 ? void 0 : errors.forEach(error => {
        response.data = undefined;
        if (checkError(error, 'UserInputError')) {
            response.http.status = 400;
        }
        else if (checkError(error, 'AuthenticationError')) {
            response.http.status = 401;
        }
        else if (checkError(error, 'ForbiddenError')) {
            response.http.status = 403;
        }
        else {
            response.http.status = 500;
        }
    });
};
const checkError = (error, errorName) => {
    var _a;
    return [error.name, (_a = error.originalError) === null || _a === void 0 ? void 0 : _a.name].some(name => name === errorName);
};
let schema = (0, schema_1.makeExecutableSchema)({ resolvers: resolvers_1.default, typeDefs: type_defs_1.default });
schema = (0, directives_1.authDirectiveTransformer)(schema);
const setupApolloServer = () => new apollo_server_express_1.ApolloServer({
    schema,
    context: ({ req }) => ({ req }),
    plugins: [{
            requestDidStart: async () => ({
                willSendResponse: async ({ response, errors }) => handleErrors(response, errors)
            })
        }]
});
exports.setupApolloServer = setupApolloServer;
//# sourceMappingURL=apollo-server.js.map