"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const paths_1 = __importDefault(require("./paths"));
const components_1 = __importDefault(require("./components"));
const schemas_1 = __importDefault(require("./schemas"));
exports.default = {
    openapi: '3.0.0',
    info: {
        title: '4Dev - Enquetes para Programadores',
        description: 'Essa é a documentação da API feita pelo instrutor Rodrigo Manguinho no curso da Udemy de NodeJs usando Typescript, TDD, Clean Architecture e seguindo os princípios do SOLID e Design Patterns.',
        version: '1.0.0',
        contact: {
            name: 'Rodrigo Manguinho',
            email: 'rodrigo.manguinho@gmail.com',
            url: 'https://www.linkedin.com/in/rmanguinho'
        },
        license: {
            name: 'GPL-3.0-or-later',
            url: 'https://spdx.org/licenses/GPL-3.0-or-later.html'
        }
    },
    externalDocs: {
        description: 'Link para o treinamento completo',
        url: 'https://www.udemy.com/course/tdd-com-mango/?referralCode=B53CE5CA2B9AFA5A6FA1'
    },
    servers: [{
            url: '/api',
            description: 'Servidor Principal'
        }],
    tags: [{
            name: 'Login',
            description: 'APIs relacionadas a Login'
        }, {
            name: 'Enquete',
            description: 'APIs relacionadas a Enquete'
        }],
    paths: paths_1.default,
    schemas: schemas_1.default,
    components: components_1.default
};
//# sourceMappingURL=index.js.map