"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbSaveSurveyResult = void 0;
const usecases_1 = require("@/data/usecases");
const db_1 = require("@/infra/db");
const makeDbSaveSurveyResult = () => {
    const surveyResultMongoRepository = new db_1.SurveyResultMongoRepository();
    return new usecases_1.DbSaveSurveyResult(surveyResultMongoRepository, surveyResultMongoRepository);
};
exports.makeDbSaveSurveyResult = makeDbSaveSurveyResult;
//# sourceMappingURL=save-survey-result-factory.js.map