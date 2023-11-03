"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adaptResolver = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const adaptResolver = async (controller, args, context) => {
    var _a;
    const request = {
        ...(args || {}),
        accountId: (_a = context === null || context === void 0 ? void 0 : context.req) === null || _a === void 0 ? void 0 : _a.accountId
    };
    const httpResponse = await controller.handle(request);
    switch (httpResponse.statusCode) {
        case 200:
        case 204: return httpResponse.body;
        case 400: throw new apollo_server_express_1.UserInputError(httpResponse.body.message);
        case 401: throw new apollo_server_express_1.AuthenticationError(httpResponse.body.message);
        case 403: throw new apollo_server_express_1.ForbiddenError(httpResponse.body.message);
        default: throw new apollo_server_express_1.ApolloError(httpResponse.body.message);
    }
};
exports.adaptResolver = adaptResolver;
//# sourceMappingURL=apollo-server-resolver-adapter.js.map