"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminAuth = void 0;
const adapters_1 = require("@/main/adapters");
const factories_1 = require("@/main/factories");
exports.adminAuth = (0, adapters_1.adaptMiddleware)((0, factories_1.makeAuthMiddleware)('admin'));
//# sourceMappingURL=admin-auth.js.map