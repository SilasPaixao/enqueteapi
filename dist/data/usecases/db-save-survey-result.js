"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbSaveSurveyResult = void 0;
class DbSaveSurveyResult {
    constructor(saveSurveyResultRepository, loadSurveyResultRepository) {
        this.saveSurveyResultRepository = saveSurveyResultRepository;
        this.loadSurveyResultRepository = loadSurveyResultRepository;
    }
    async save(data) {
        await this.saveSurveyResultRepository.save(data);
        return this.loadSurveyResultRepository.loadBySurveyId(data.surveyId, data.accountId);
    }
}
exports.DbSaveSurveyResult = DbSaveSurveyResult;
//# sourceMappingURL=db-save-survey-result.js.map