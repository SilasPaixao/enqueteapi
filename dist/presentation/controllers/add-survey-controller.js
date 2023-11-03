"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddSurveyController = void 0;
const helpers_1 = require("@/presentation/helpers");
class AddSurveyController {
    constructor(validation, addSurvey) {
        this.validation = validation;
        this.addSurvey = addSurvey;
    }
    async handle(request) {
        try {
            const error = this.validation.validate(request);
            if (error) {
                return (0, helpers_1.badRequest)(error);
            }
            await this.addSurvey.add({
                ...request,
                date: new Date()
            });
            return (0, helpers_1.noContent)();
        }
        catch (error) {
            return (0, helpers_1.serverError)(error);
        }
    }
}
exports.AddSurveyController = AddSurveyController;
//# sourceMappingURL=add-survey-controller.js.map