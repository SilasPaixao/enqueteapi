"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoginValidation = void 0;
const validators_1 = require("@/validation/validators");
const validators_2 = require("@/infra/validators");
const makeLoginValidation = () => {
    const validations = [];
    for (const field of ['email', 'password']) {
        validations.push(new validators_1.RequiredFieldValidation(field));
    }
    validations.push(new validators_1.EmailValidation('email', new validators_2.EmailValidatorAdapter()));
    return new validators_1.ValidationComposite(validations);
};
exports.makeLoginValidation = makeLoginValidation;
//# sourceMappingURL=login-validation-factory.js.map