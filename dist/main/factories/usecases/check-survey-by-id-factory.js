"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbCheckSurveyById = void 0;
const db_1 = require("@/infra/db");
const usecases_1 = require("@/data/usecases");
const makeDbCheckSurveyById = () => {
    const surveyMongoRepository = new db_1.SurveyMongoRepository();
    return new usecases_1.DbCheckSurveyById(surveyMongoRepository);
};
exports.makeDbCheckSurveyById = makeDbCheckSurveyById;
//# sourceMappingURL=check-survey-by-id-factory.js.map