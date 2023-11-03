"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadAccountByToken = void 0;
class DbLoadAccountByToken {
    constructor(decrypter, loadAccountByTokenRepository) {
        this.decrypter = decrypter;
        this.loadAccountByTokenRepository = loadAccountByTokenRepository;
    }
    async load(accessToken, role) {
        let token;
        try {
            token = await this.decrypter.decrypt(accessToken);
        }
        catch (error) {
            return null;
        }
        if (token) {
            const account = await this.loadAccountByTokenRepository.loadByToken(accessToken, role);
            if (account) {
                return account;
            }
        }
        return null;
    }
}
exports.DbLoadAccountByToken = DbLoadAccountByToken;
//# sourceMappingURL=db-load-account-by-token.js.map