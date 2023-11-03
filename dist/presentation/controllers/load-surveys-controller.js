"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadSurveysController = void 0;
const helpers_1 = require("@/presentation/helpers");
class LoadSurveysController {
    constructor(loadSurveys) {
        this.loadSurveys = loadSurveys;
    }
    async handle(request) {
        try {
            const surveys = await this.loadSurveys.load(request.accountId);
            return surveys.length ? (0, helpers_1.ok)(surveys) : (0, helpers_1.noContent)();
        }
        catch (error) {
            return (0, helpers_1.serverError)(error);
        }
    }
}
exports.LoadSurveysController = LoadSurveysController;
//# sourceMappingURL=load-surveys-controller.js.map