"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountMongoRepository = void 0;
const db_1 = require("@/infra/db");
class AccountMongoRepository {
    async add(data) {
        const accountCollection = db_1.MongoHelper.getCollection('accounts');
        const result = await accountCollection.insertOne(data);
        return result.insertedId !== null;
    }
    async loadByEmail(email) {
        const accountCollection = db_1.MongoHelper.getCollection('accounts');
        const account = await accountCollection.findOne({
            email
        }, {
            projection: {
                _id: 1,
                name: 1,
                password: 1
            }
        });
        return account && db_1.MongoHelper.map(account);
    }
    async checkByEmail(email) {
        const accountCollection = db_1.MongoHelper.getCollection('accounts');
        const account = await accountCollection.findOne({
            email
        }, {
            projection: {
                _id: 1
            }
        });
        return account !== null;
    }
    async updateAccessToken(id, token) {
        const accountCollection = db_1.MongoHelper.getCollection('accounts');
        await accountCollection.updateOne({
            _id: id
        }, {
            $set: {
                accessToken: token
            }
        });
    }
    async loadByToken(token, role) {
        const accountCollection = db_1.MongoHelper.getCollection('accounts');
        const account = await accountCollection.findOne({
            accessToken: token,
            $or: [{
                    role
                }, {
                    role: 'admin'
                }]
        }, {
            projection: {
                _id: 1
            }
        });
        return account && db_1.MongoHelper.map(account);
    }
}
exports.AccountMongoRepository = AccountMongoRepository;
//# sourceMappingURL=account-mongo-repository.js.map