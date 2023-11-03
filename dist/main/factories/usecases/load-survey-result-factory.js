"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadSurveyResult = void 0;
const usecases_1 = require("@/data/usecases");
const db_1 = require("@/infra/db");
const makeDbLoadSurveyResult = () => {
    const surveyResultMongoRepository = new db_1.SurveyResultMongoRepository();
    const surveyMongoRepository = new db_1.SurveyMongoRepository();
    return new usecases_1.DbLoadSurveyResult(surveyResultMongoRepository, surveyMongoRepository);
};
exports.makeDbLoadSurveyResult = makeDbLoadSurveyResult;
//# sourceMappingURL=load-survey-result-factory.js.map