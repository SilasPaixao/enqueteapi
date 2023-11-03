"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadSurveysController = void 0;
const factories_1 = require("@/main/factories");
const controllers_1 = require("@/presentation/controllers");
const makeLoadSurveysController = () => {
    const controller = new controllers_1.LoadSurveysController((0, factories_1.makeDbLoadSurveys)());
    return (0, factories_1.makeLogControllerDecorator)(controller);
};
exports.makeLoadSurveysController = makeLoadSurveysController;
//# sourceMappingURL=load-surveys-controller-factory.js.map