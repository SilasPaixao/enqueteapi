"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbAddSurvey = void 0;
const db_1 = require("@/infra/db");
const usecases_1 = require("@/data/usecases");
const makeDbAddSurvey = () => {
    const surveyMongoRepository = new db_1.SurveyMongoRepository();
    return new usecases_1.DbAddSurvey(surveyMongoRepository);
};
exports.makeDbAddSurvey = makeDbAddSurvey;
//# sourceMappingURL=add-survey-factory.js.map