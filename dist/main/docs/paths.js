"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const paths_1 = require("./paths/");
exports.default = {
    '/login': paths_1.loginPath,
    '/signup': paths_1.signUpPath,
    '/surveys': paths_1.surveyPath,
    '/surveys/{surveyId}/results': paths_1.surveyResultPath
};
//# sourceMappingURL=paths.js.map