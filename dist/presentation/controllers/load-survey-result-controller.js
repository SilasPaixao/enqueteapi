"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadSurveyResultController = void 0;
const helpers_1 = require("@/presentation/helpers");
const errors_1 = require("@/presentation/errors");
class LoadSurveyResultController {
    constructor(checkSurveyById, loadSurveyResult) {
        this.checkSurveyById = checkSurveyById;
        this.loadSurveyResult = loadSurveyResult;
    }
    async handle(request) {
        try {
            const { surveyId, accountId } = request;
            const exists = await this.checkSurveyById.checkById(surveyId);
            if (!exists) {
                return (0, helpers_1.forbidden)(new errors_1.InvalidParamError('surveyId'));
            }
            const surveyResult = await this.loadSurveyResult.load(surveyId, accountId);
            return (0, helpers_1.ok)(surveyResult);
        }
        catch (error) {
            return (0, helpers_1.serverError)(error);
        }
    }
}
exports.LoadSurveyResultController = LoadSurveyResultController;
//# sourceMappingURL=load-survey-result-controller.js.map