"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountSchema = void 0;
exports.accountSchema = {
    type: 'object',
    properties: {
        accessToken: {
            type: 'string'
        },
        name: {
            type: 'string'
        }
    },
    required: ['accessToken', 'name']
};
//# sourceMappingURL=account-schema.js.map