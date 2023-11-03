"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadAccountByToken = void 0;
const env_1 = __importDefault(require("@/main/config/env"));
const usecases_1 = require("@/data/usecases");
const db_1 = require("@/infra/db");
const cryptography_1 = require("@/infra/cryptography");
const makeDbLoadAccountByToken = () => {
    const jwtAdapter = new cryptography_1.JwtAdapter(env_1.default.jwtSecret);
    const accountMongoRepository = new db_1.AccountMongoRepository();
    return new usecases_1.DbLoadAccountByToken(jwtAdapter, accountMongoRepository);
};
exports.makeDbLoadAccountByToken = makeDbLoadAccountByToken;
//# sourceMappingURL=load-account-by-token-factory.js.map