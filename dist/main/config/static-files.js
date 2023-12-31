"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = require("path");
exports.default = (app) => {
    app.use('/static', express_1.default.static((0, path_1.resolve)(__dirname, '../../static')));
};
//# sourceMappingURL=static-files.js.map