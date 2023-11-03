"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadAnswersBySurvey = void 0;
class DbLoadAnswersBySurvey {
    constructor(loadAnswersBySurveyRepository) {
        this.loadAnswersBySurveyRepository = loadAnswersBySurveyRepository;
    }
    async loadAnswers(id) {
        return this.loadAnswersBySurveyRepository.loadAnswers(id);
    }
}
exports.DbLoadAnswersBySurvey = DbLoadAnswersBySurvey;
//# sourceMappingURL=db-load-answers-by-survey.js.map