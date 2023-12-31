"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.surveyAnswerSchema = void 0;
exports.surveyAnswerSchema = {
    type: 'object',
    properties: {
        image: {
            type: 'string'
        },
        answer: {
            type: 'string'
        }
    },
    required: ['answer']
};
//# sourceMappingURL=survey-answer-schema.js.map