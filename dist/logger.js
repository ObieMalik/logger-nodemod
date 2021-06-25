"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston = require("winston");
const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
};
const level = () => {
    const env = process.env.NODE_ENV || 'development';
    if (env === 'development')
        return 'debug';
    if (env === 'production')
        return 'warn';
    return 'info';
};
const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'white',
};
winston.addColors(colors);
const format = winston.format.combine(winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }), winston.format.colorize({ all: true }), winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`));
const transports = [
    new winston.transports.Console(),
    new winston.transports.File({
        filename: 'logs/error.log',
        level: 'warn',
    }),
    new winston.transports.File({
        filename: 'logs/all.log',
        level: 'debug'
    })
];
const logger = winston.createLogger({
    level: level(),
    levels,
    format,
    transports,
});
exports.logger = logger;
//# sourceMappingURL=logger.js.map