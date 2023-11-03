"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adapters_1 = require("@/main/adapters");
const factories_1 = require("@/main/factories");
exports.default = {
    Query: {
        login: async (parent, args) => (0, adapters_1.adaptResolver)((0, factories_1.makeLoginController)(), args)
    },
    Mutation: {
        signUp: async (parent, args) => (0, adapters_1.adaptResolver)((0, factories_1.makeSignUpController)(), args)
    }
};
//# sourceMappingURL=login.js.map