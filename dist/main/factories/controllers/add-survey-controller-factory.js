"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddSurveyController = void 0;
const factories_1 = require("@/main/factories");
const controllers_1 = require("@/presentation/controllers");
const makeAddSurveyController = () => {
    const controller = new controllers_1.AddSurveyController((0, factories_1.makeAddSurveyValidation)(), (0, factories_1.makeDbAddSurvey)());
    return (0, factories_1.makeLogControllerDecorator)(controller);
};
exports.makeAddSurveyController = makeAddSurveyController;
//# sourceMappingURL=add-survey-controller-factory.js.map