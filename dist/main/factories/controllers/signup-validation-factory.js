"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSignUpValidation = void 0;
const validators_1 = require("@/validation/validators");
const validators_2 = require("@/infra/validators");
const makeSignUpValidation = () => {
    const validations = [];
    for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
        validations.push(new validators_1.RequiredFieldValidation(field));
    }
    validations.push(new validators_1.CompareFieldsValidation('password', 'passwordConfirmation'));
    validations.push(new validators_1.EmailValidation('email', new validators_2.EmailValidatorAdapter()));
    return new validators_1.ValidationComposite(validations);
};
exports.makeSignUpValidation = makeSignUpValidation;
//# sourceMappingURL=signup-validation-factory.js.map