"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.surveyResultSchema = void 0;
exports.surveyResultSchema = {
    type: 'object',
    properties: {
        surveyId: {
            type: 'string'
        },
        question: {
            type: 'string'
        },
        answers: {
            type: 'array',
            items: {
                $ref: '#/schemas/surveyResultAnswer'
            }
        },
        date: {
            type: 'string'
        }
    },
    required: ['surveyId', 'question', 'answers', 'date']
};
//# sourceMappingURL=survey-result-schema.js.map