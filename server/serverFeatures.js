"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
function loadAppFeatures(app) {
    console.log("inside server.ts");
    app.use((0, cors_1.default)());
}
exports.default = loadAppFeatures;
