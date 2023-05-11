"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorrelationIdMiddleware = void 0;
const uuid_1 = __importDefault(require("uuid"));
function CorrelationIdMiddleware(genFn = uuid_1.default.v4) {
    return (req, res, next) => {
        const correlationHeader = req.header("x-correlation-id") || genFn();
        req.headers["x-correlation-id"] = correlationHeader;
        res.set("X-Correlation-Id", correlationHeader);
        next();
    };
}
exports.CorrelationIdMiddleware = CorrelationIdMiddleware;
//# sourceMappingURL=correlation-id.middleware.js.map