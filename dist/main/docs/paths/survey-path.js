"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.surveyPath = void 0;
exports.surveyPath = {
    get: {
        security: [{
                apiKeyAuth: []
            }],
        tags: ['Enquete'],
        summary: 'API para listar todas as enquetes',
        description: 'Essa rota só pode ser executada por **usuários autenticados**',
        responses: {
            200: {
                description: 'Sucesso',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/schemas/surveys'
                        }
                    }
                }
            },
            204: {
                description: 'Sucesso, mas sem dados para exibir'
            },
            403: {
                $ref: '#/components/forbidden'
            },
            404: {
                $ref: '#/components/notFound'
            },
            500: {
                $ref: '#/components/serverError'
            }
        }
    },
    post: {
        security: [{
                apiKeyAuth: []
            }],
        tags: ['Enquete'],
        summary: 'API para criar uma enquete',
        description: 'Essa rota só pode ser executada por **administradores**',
        requestBody: {
            required: true,
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/schemas/addSurveyParams'
                    }
                }
            }
        },
        responses: {
            204: {
                description: 'Sucesso, mas sem dados para exibir'
            },
            403: {
                $ref: '#/components/forbidden'
            },
            404: {
                $ref: '#/components/notFound'
            },
            500: {
                $ref: '#/components/serverError'
            }
        }
    }
};
//# sourceMappingURL=survey-path.js.map