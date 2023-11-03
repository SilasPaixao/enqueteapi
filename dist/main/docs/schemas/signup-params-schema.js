"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpParamsSchema = void 0;
exports.signUpParamsSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string'
        },
        email: {
            type: 'string'
        },
        password: {
            type: 'string'
        },
        passwordConfirmation: {
            type: 'string'
        }
    },
    required: ['name', 'email', 'password', 'passwordConfirmation']
};
//# sourceMappingURL=signup-params-schema.js.map