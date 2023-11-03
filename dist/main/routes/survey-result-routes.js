"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const factories_1 = require("@/main/factories");
const adapters_1 = require("@/main/adapters");
const middlewares_1 = require("@/main/middlewares");
exports.default = (router) => {
    router.put('/surveys/:surveyId/results', middlewares_1.auth, (0, adapters_1.adaptRoute)((0, factories_1.makeSaveSurveyResultController)()));
    router.get('/surveys/:surveyId/results', middlewares_1.auth, (0, adapters_1.adaptRoute)((0, factories_1.makeLoadSurveyResultController)()));
};
//# sourceMappingURL=survey-result-routes.js.map