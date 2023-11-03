"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schemas_1 = require("./schemas/");
exports.default = {
    account: schemas_1.accountSchema,
    loginParams: schemas_1.loginParamsSchema,
    signUpParams: schemas_1.signUpParamsSchema,
    addSurveyParams: schemas_1.addSurveyParamsSchema,
    error: schemas_1.errorSchema,
    surveys: schemas_1.surveysSchema,
    survey: schemas_1.surveySchema,
    surveyAnswer: schemas_1.surveyAnswerSchema,
    saveSurveyParams: schemas_1.saveSurveyParamsSchema,
    surveyResult: schemas_1.surveyResultSchema,
    surveyResultAnswer: schemas_1.surveyResultAnswerSchema
};
//# sourceMappingURL=schemas.js.map