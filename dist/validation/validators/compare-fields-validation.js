"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompareFieldsValidation = void 0;
const errors_1 = require("@/presentation/errors");
class CompareFieldsValidation {
    constructor(fieldName, fieldToCompareName) {
        this.fieldName = fieldName;
        this.fieldToCompareName = fieldToCompareName;
    }
    validate(input) {
        if (input[this.fieldName] !== input[this.fieldToCompareName]) {
            return new errors_1.InvalidParamError(this.fieldToCompareName);
        }
    }
}
exports.CompareFieldsValidation = CompareFieldsValidation;
//# sourceMappingURL=compare-fields-validation.js.map