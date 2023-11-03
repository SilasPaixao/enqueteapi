"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbAddAccount = void 0;
class DbAddAccount {
    constructor(hasher, addAccountRepository, checkAccountByEmailRepository) {
        this.hasher = hasher;
        this.addAccountRepository = addAccountRepository;
        this.checkAccountByEmailRepository = checkAccountByEmailRepository;
    }
    async add(accountData) {
        const exists = await this.checkAccountByEmailRepository.checkByEmail(accountData.email);
        let isValid = false;
        if (!exists) {
            const hashedPassword = await this.hasher.hash(accountData.password);
            isValid = await this.addAccountRepository.add({ ...accountData, password: hashedPassword });
        }
        return isValid;
    }
}
exports.DbAddAccount = DbAddAccount;
//# sourceMappingURL=db-add-account.js.map