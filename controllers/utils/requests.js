"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Requests = void 0;
const axios_1 = __importStar(require("axios"));
class Requests {
    constructor(config, extraConfig) {
        var _a;
        this.url = "";
        this.method = "GET";
        this.data = "";
        this.url = config.url || "";
        this.method = config.method || "";
        this.data = config.data ? JSON.stringify(config.data) : this.data;
        if (extraConfig.sso) {
            this.auth = extraConfig.req.headers.authorization;
        }
        else {
            this.auth = ((_a = config.headers) === null || _a === void 0 ? void 0 : _a.Authorization) ? config.headers.Authorization : '';
        }
    }
    execute() {
        return new Promise((resolve, reject) => {
            (0, axios_1.default)({
                method: this.method,
                url: this.url,
                data: this.data,
                headers: {
                    Authorization: this.auth,
                    "Content-Type": "application/json"
                }
            }).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    resolve(response.data);
                }
                else if (response.status >= 300) {
                    reject(response.data);
                }
            }).catch((e) => {
                if ((0, axios_1.isAxiosError)(e)) {
                    reject(`Axios Error: Status is ${e.status}, message is ${e.message}`);
                }
                else {
                    reject(e);
                }
            });
        });
    }
}
exports.Requests = Requests;
//adding comment to create comment. This is for testing git forks
