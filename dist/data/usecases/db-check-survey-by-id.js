"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbCheckSurveyById = void 0;
class DbCheckSurveyById {
    constructor(checkSurveyByIdRepository) {
        this.checkSurveyByIdRepository = checkSurveyByIdRepository;
    }
    async checkById(id) {
        return this.checkSurveyByIdRepository.checkById(id);
    }
}
exports.DbCheckSurveyById = DbCheckSurveyById;
//# sourceMappingURL=db-check-survey-by-id.js.map