"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbAddSurvey = void 0;
class DbAddSurvey {
    constructor(addSurveyRepository) {
        this.addSurveyRepository = addSurveyRepository;
    }
    async add(data) {
        await this.addSurveyRepository.add(data);
    }
}
exports.DbAddSurvey = DbAddSurvey;
//# sourceMappingURL=db-add-survey.js.map