"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginPath = void 0;
exports.loginPath = {
    post: {
        tags: ['Login'],
        summary: 'API para autenticar usuário',
        description: 'Essa rota pode ser executada por **qualquer usuário**',
        requestBody: {
            required: true,
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/schemas/loginParams'
                    }
                }
            }
        },
        responses: {
            200: {
                description: 'Sucesso',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/schemas/account'
                        }
                    }
                }
            },
            400: {
                $ref: '#/components/badRequest'
            },
            401: {
                $ref: '#/components/unauthorized'
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
//# sourceMappingURL=login-path.js.map