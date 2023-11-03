"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adapters_1 = require("@/main/adapters");
const factories_1 = require("@/main/factories");
exports.default = {
    Query: {
        surveys: async (parent, args, context) => (0, adapters_1.adaptResolver)((0, factories_1.makeLoadSurveysController)(), args, context)
    }
};
//# sourceMappingURL=survey.js.map