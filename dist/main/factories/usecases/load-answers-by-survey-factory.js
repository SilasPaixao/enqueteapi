"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadAnswersBySurvey = void 0;
const db_1 = require("@/infra/db");
const usecases_1 = require("@/data/usecases");
const makeDbLoadAnswersBySurvey = () => {
    const surveyMongoRepository = new db_1.SurveyMongoRepository();
    return new usecases_1.DbLoadAnswersBySurvey(surveyMongoRepository);
};
exports.makeDbLoadAnswersBySurvey = makeDbLoadAnswersBySurvey;
//# sourceMappingURL=load-answers-by-survey-factory.js.map