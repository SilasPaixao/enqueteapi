"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadSurveys = void 0;
const db_1 = require("@/infra/db");
const usecases_1 = require("@/data/usecases");
const makeDbLoadSurveys = () => {
    const surveyMongoRepository = new db_1.SurveyMongoRepository();
    return new usecases_1.DbLoadSurveys(surveyMongoRepository);
};
exports.makeDbLoadSurveys = makeDbLoadSurveys;
//# sourceMappingURL=load-surveys-factory.js.map