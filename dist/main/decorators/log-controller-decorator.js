"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogControllerDecorator = void 0;
class LogControllerDecorator {
    constructor(controller, logErrorRepository) {
        this.controller = controller;
        this.logErrorRepository = logErrorRepository;
    }
    async handle(request) {
        const httpResponse = await this.controller.handle(request);
        if (httpResponse.statusCode === 500) {
            await this.logErrorRepository.logError(httpResponse.body.stack);
        }
        return httpResponse;
    }
}
exports.LogControllerDecorator = LogControllerDecorator;
//# sourceMappingURL=log-controller-decorator.js.map