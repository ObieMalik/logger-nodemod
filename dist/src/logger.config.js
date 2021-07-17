"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerConfiguration = void 0;
const Winston = require("winston");
class LoggerConfiguration {
    static get level() {
        const env = process.env.NODE_ENV || 'development';
        if (env === 'development')
            return 'debug';
        if (env === 'production')
            return 'warn';
        return 'info';
    }
}
exports.LoggerConfiguration = LoggerConfiguration;
LoggerConfiguration.levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4
};
LoggerConfiguration.colors = {
    error: 'red',
    warn: 'yellow',
    info: 'white',
    http: 'magenta',
    debug: 'green'
};
LoggerConfiguration.format = Winston.format.combine(Winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }), Winston.format.colorize({ all: true }), Winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`));
LoggerConfiguration.transports = [
    new Winston.transports.Console(),
    new Winston.transports.File({
        filename: 'logs/error.log',
        level: 'warn'
    }),
    new Winston.transports.File({
        filename: 'logs/all.log',
        level: 'debug'
    })
];
//# sourceMappingURL=logger.config.js.map