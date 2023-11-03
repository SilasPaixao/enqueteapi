"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadSurveyResult = void 0;
class DbLoadSurveyResult {
    constructor(loadSurveyResultRepository, loadSurveyByIdRepository) {
        this.loadSurveyResultRepository = loadSurveyResultRepository;
        this.loadSurveyByIdRepository = loadSurveyByIdRepository;
    }
    async load(surveyId, accountId) {
        let surveyResult = await this.loadSurveyResultRepository.loadBySurveyId(surveyId, accountId);
        if (!surveyResult) {
            const survey = await this.loadSurveyByIdRepository.loadById(surveyId);
            surveyResult = this.makeEmptyResult(survey);
        }
        return surveyResult;
    }
    makeEmptyResult(survey) {
        return {
            surveyId: survey.id,
            question: survey.question,
            date: survey.date,
            answers: survey.answers.map(answer => ({
                ...answer,
                count: 0,
                percent: 0,
                isCurrentAccountAnswer: false
            }))
        };
    }
}
exports.DbLoadSurveyResult = DbLoadSurveyResult;
//# sourceMappingURL=db-load-survey-result.js.map