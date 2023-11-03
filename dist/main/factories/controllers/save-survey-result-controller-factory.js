"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSaveSurveyResultController = void 0;
const factories_1 = require("@/main/factories");
const controllers_1 = require("@/presentation/controllers");
const makeSaveSurveyResultController = () => {
    const controller = new controllers_1.SaveSurveyResultController((0, factories_1.makeDbLoadAnswersBySurvey)(), (0, factories_1.makeDbSaveSurveyResult)());
    return (0, factories_1.makeLogControllerDecorator)(controller);
};
exports.makeSaveSurveyResultController = makeSaveSurveyResultController;
//# sourceMappingURL=save-survey-result-controller-factory.js.map