"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston = require("winston");
exports.logger = new winston.Logger({
    transports: [
        new winston.transports.Console({
            level: process.env.LOG_LEVEL || 'debug',
            timestamp: function () {
                return (new Date()).toISOString();
            }
        })
    ]
});
//# sourceMappingURL=logger.js.map