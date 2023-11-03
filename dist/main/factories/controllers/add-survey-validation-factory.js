"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddSurveyValidation = void 0;
const validators_1 = require("@/validation/validators");
const makeAddSurveyValidation = () => {
    const validations = [];
    for (const field of ['question', 'answers']) {
        validations.push(new validators_1.RequiredFieldValidation(field));
    }
    return new validators_1.ValidationComposite(validations);
};
exports.makeAddSurveyValidation = makeAddSurveyValidation;
//# sourceMappingURL=add-survey-validation-factory.js.map