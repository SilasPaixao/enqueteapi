"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogMongoRepository = void 0;
const db_1 = require("@/infra/db");
class LogMongoRepository {
    async logError(stack) {
        const errorCollection = db_1.MongoHelper.getCollection('errors');
        await errorCollection.insertOne({
            stack,
            date: new Date()
        });
    }
}
exports.LogMongoRepository = LogMongoRepository;
//# sourceMappingURL=log-mongo-repository.js.map