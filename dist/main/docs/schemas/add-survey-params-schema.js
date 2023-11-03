"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addSurveyParamsSchema = void 0;
exports.addSurveyParamsSchema = {
    type: 'object',
    properties: {
        question: {
            type: 'string'
        },
        answers: {
            type: 'array',
            items: {
                $ref: '#/schemas/surveyAnswer'
            }
        }
    },
    required: ['question', 'answers']
};
//# sourceMappingURL=add-survey-params-schema.js.map