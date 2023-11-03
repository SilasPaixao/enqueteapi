"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.surveySchema = void 0;
exports.surveySchema = {
    type: 'object',
    properties: {
        id: {
            type: 'string'
        },
        question: {
            type: 'string'
        },
        answers: {
            type: 'array',
            items: {
                $ref: '#/schemas/surveyAnswer'
            }
        },
        date: {
            type: 'string'
        },
        didAnswer: {
            type: 'boolean'
        }
    },
    required: ['id', 'question', 'answers', 'date', 'didAnswer']
};
//# sourceMappingURL=survey-schema.js.map