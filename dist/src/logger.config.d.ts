import * as Winston from 'winston';
export declare class LoggerConfiguration {
    static get level(): string;
    static levels: {
        error: number;
        warn: number;
        info: number;
        http: number;
        debug: number;
    };
    static colors: Winston.config.AbstractConfigSetColors;
    static format: Winston.Logform.Format;
    static transports: (Winston.transports.ConsoleTransportInstance | Winston.transports.FileTransportInstance)[];
}
