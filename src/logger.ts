import * as winston from 'winston'

export interface Logger extends winston.LoggerInstance {

}

export const logger: Logger = new winston.Logger( {
	transports: [
		new winston.transports.Console( {
			level: process.env.LOG_LEVEL || 'debug',
			timestamp: function () {
				return ( new Date() ).toISOString();
			}
		} )
	]
} )
