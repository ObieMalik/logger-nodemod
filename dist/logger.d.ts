import * as winston from 'winston';
export interface Logger extends winston.LoggerInstance {
}
export declare const logger: Logger;
