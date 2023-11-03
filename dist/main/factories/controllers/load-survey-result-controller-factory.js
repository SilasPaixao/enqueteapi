"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadSurveyResultController = void 0;
const factories_1 = require("@/main/factories");
const controllers_1 = require("@/presentation/controllers");
const makeLoadSurveyResultController = () => {
    const controller = new controllers_1.LoadSurveyResultController((0, factories_1.makeDbCheckSurveyById)(), (0, factories_1.makeDbLoadSurveyResult)());
    return (0, factories_1.makeLogControllerDecorator)(controller);
};
exports.makeLoadSurveyResultController = makeLoadSurveyResultController;
//# sourceMappingURL=load-survey-result-controller-factory.js.map