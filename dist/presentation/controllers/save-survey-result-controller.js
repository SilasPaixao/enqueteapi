"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveSurveyResultController = void 0;
const helpers_1 = require("@/presentation/helpers");
const errors_1 = require("@/presentation/errors");
class SaveSurveyResultController {
    constructor(loadAnswersBySurvey, saveSurveyResult) {
        this.loadAnswersBySurvey = loadAnswersBySurvey;
        this.saveSurveyResult = saveSurveyResult;
    }
    async handle(request) {
        try {
            const { surveyId, answer } = request;
            const answers = await this.loadAnswersBySurvey.loadAnswers(surveyId);
            if (!answers.length) {
                return (0, helpers_1.forbidden)(new errors_1.InvalidParamError('surveyId'));
            }
            else if (!answers.includes(answer)) {
                return (0, helpers_1.forbidden)(new errors_1.InvalidParamError('answer'));
            }
            const surveyResult = await this.saveSurveyResult.save({
                ...request,
                date: new Date()
            });
            return (0, helpers_1.ok)(surveyResult);
        }
        catch (error) {
            return (0, helpers_1.serverError)(error);
        }
    }
}
exports.SaveSurveyResultController = SaveSurveyResultController;
//# sourceMappingURL=save-survey-result-controller.js.map