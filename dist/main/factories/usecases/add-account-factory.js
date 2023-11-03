"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbAddAccount = void 0;
const usecases_1 = require("@/data/usecases");
const db_1 = require("@/infra/db");
const cryptography_1 = require("@/infra/cryptography");
const makeDbAddAccount = () => {
    const salt = 12;
    const bcryptAdapter = new cryptography_1.BcryptAdapter(salt);
    const accountMongoRepository = new db_1.AccountMongoRepository();
    return new usecases_1.DbAddAccount(bcryptAdapter, accountMongoRepository, accountMongoRepository);
};
exports.makeDbAddAccount = makeDbAddAccount;
//# sourceMappingURL=add-account-factory.js.map