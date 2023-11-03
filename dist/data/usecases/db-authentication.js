"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbAuthentication = void 0;
class DbAuthentication {
    constructor(loadAccountByEmailRepository, hashComparer, encrypter, updateAccessTokenRepository) {
        this.loadAccountByEmailRepository = loadAccountByEmailRepository;
        this.hashComparer = hashComparer;
        this.encrypter = encrypter;
        this.updateAccessTokenRepository = updateAccessTokenRepository;
    }
    async auth(authenticationParams) {
        const account = await this.loadAccountByEmailRepository.loadByEmail(authenticationParams.email);
        if (account) {
            const isValid = await this.hashComparer.compare(authenticationParams.password, account.password);
            if (isValid) {
                const accessToken = await this.encrypter.encrypt(account.id);
                await this.updateAccessTokenRepository.updateAccessToken(account.id, accessToken);
                return {
                    accessToken,
                    name: account.name
                };
            }
        }
        return null;
    }
}
exports.DbAuthentication = DbAuthentication;
//# sourceMappingURL=db-authentication.js.map