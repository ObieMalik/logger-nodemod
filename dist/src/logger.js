"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const Winston = require("winston");
const logger_config_1 = require("./logger.config");
class Logger {
    constructor(options = {
        level: logger_config_1.LoggerConfiguration.level,
        levels: logger_config_1.LoggerConfiguration.levels,
        format: logger_config_1.LoggerConfiguration.format,
        transports: logger_config_1.LoggerConfiguration.transports
    }) {
        this.options = options;
    }
    get instance() {
        if (!Logger._instance)
            Logger._instance = this.createInstance();
        return Logger._instance;
    }
    createInstance() {
        Winston.addColors(logger_config_1.LoggerConfiguration.colors);
        return Winston.createLogger(this.options);
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map