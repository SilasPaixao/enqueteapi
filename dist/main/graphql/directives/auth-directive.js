"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authDirectiveTransformer = void 0;
const factories_1 = require("@/main/factories");
const utils_1 = require("@graphql-tools/utils");
const apollo_server_express_1 = require("apollo-server-express");
const authDirectiveTransformer = (schema) => {
    return (0, utils_1.mapSchema)(schema, {
        [utils_1.MapperKind.OBJECT_FIELD]: (fieldConfig) => {
            const authDirective = (0, utils_1.getDirective)(schema, fieldConfig, 'auth');
            if (authDirective) {
                const { resolve } = fieldConfig;
                fieldConfig.resolve = async (parent, args, context, info) => {
                    var _a, _b;
                    const request = {
                        accessToken: (_b = (_a = context === null || context === void 0 ? void 0 : context.req) === null || _a === void 0 ? void 0 : _a.headers) === null || _b === void 0 ? void 0 : _b['x-access-token']
                    };
                    const httpResponse = await (0, factories_1.makeAuthMiddleware)().handle(request);
                    if (httpResponse.statusCode === 200) {
                        Object.assign(context === null || context === void 0 ? void 0 : context.req, httpResponse.body);
                        return resolve.call(this, parent, args, context, info);
                    }
                    else {
                        throw new apollo_server_express_1.ForbiddenError(httpResponse.body.message);
                    }
                };
            }
            return fieldConfig;
        }
    });
};
exports.authDirectiveTransformer = authDirectiveTransformer;
//# sourceMappingURL=auth-directive.js.map