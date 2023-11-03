"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adapters_1 = require("@/main/adapters");
const factories_1 = require("@/main/factories");
const middlewares_1 = require("@/main/middlewares");
exports.default = (router) => {
    router.post('/surveys', middlewares_1.adminAuth, (0, adapters_1.adaptRoute)((0, factories_1.makeAddSurveyController)()));
    router.get('/surveys', middlewares_1.auth, (0, adapters_1.adaptRoute)((0, factories_1.makeLoadSurveysController)()));
};
//# sourceMappingURL=survey-routes.js.map