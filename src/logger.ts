import * as Winston from 'winston'

import { LoggerConfiguration } from './logger.config'

/**
 * Logger
 */
export class Logger {
    private static _instance: Winston.Logger

    /**
     * Build logger Configuration
     * @param {Winston.LoggerOptions} options Winston logger options
     */
    constructor(
        private options: Winston.LoggerOptions = {
            level: LoggerConfiguration.level,
            levels: LoggerConfiguration.levels,
            format: LoggerConfiguration.format,
            transports: LoggerConfiguration.transports
        }
    ) {

    }

    /**
     * Get instance of winston logger
     */
    public get instance(): Winston.Logger {
        if (!Logger._instance)
            Logger._instance = this.createInstance()
        return Logger._instance
    }

    /**
     * Create a new instance of winston logger
     * @return {Winston.Logger} Instance
     */
    public createInstance(): Winston.Logger {
        Winston.addColors(LoggerConfiguration.colors)
        return Winston.createLogger(this.options)
    }
}