"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadSurveys = void 0;
class DbLoadSurveys {
    constructor(loadSurveysRepository) {
        this.loadSurveysRepository = loadSurveysRepository;
    }
    async load(accountId) {
        return this.loadSurveysRepository.loadAll(accountId);
    }
}
exports.DbLoadSurveys = DbLoadSurveys;
//# sourceMappingURL=db-load-surveys.js.map