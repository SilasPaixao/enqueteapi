"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.surveyResultAnswerSchema = void 0;
exports.surveyResultAnswerSchema = {
    type: 'object',
    properties: {
        image: {
            type: 'string'
        },
        answer: {
            type: 'string'
        },
        count: {
            type: 'number'
        },
        percent: {
            type: 'number'
        },
        isCurrentAccountAnswer: {
            type: 'boolean'
        }
    },
    required: ['answer', 'count', 'percent', 'isCurrentAccountAnswer']
};
//# sourceMappingURL=survey-result-answer-schema.js.map