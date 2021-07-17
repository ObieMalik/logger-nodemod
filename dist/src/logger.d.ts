import * as Winston from 'winston';
export declare class Logger {
    private options;
    private static _instance;
    constructor(options?: Winston.LoggerOptions);
    get instance(): Winston.Logger;
    createInstance(): Winston.Logger;
}
