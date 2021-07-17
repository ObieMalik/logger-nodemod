import * as Winston from 'winston'

/**
 * Logger Configuration
 */
export class LoggerConfiguration {
    /**
     * Get minimum level of winston logging based on environment settings
     */
    public static get level(): string {
        const env = process.env.NODE_ENV || 'development'

        if (env === 'development')
            return 'debug'

        if (env === 'production')
            return 'warn'

        return 'info'
    }

    public static levels = {
        error: 0,
        warn: 1,
        info: 2,
        http: 3,
        debug: 4
    }

    public static colors: Winston.config.AbstractConfigSetColors = {
        error: 'red',
        warn: 'yellow',
        info: 'white',
        http: 'magenta',
        debug: 'green'
    }

    public static format = Winston.format.combine(
        Winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
        Winston.format.colorize({ all: true }),
        Winston.format.printf(
            (info) => `${info.timestamp} ${info.level}: ${info.message}`
        )
    )

    public static transports = [
        new Winston.transports.Console(),
        new Winston.transports.File({
            filename: 'logs/error.log',
            level: 'warn'
        }),
        new Winston.transports.File({
            filename: 'logs/all.log',
            level: 'debug'
        })
    ]
}