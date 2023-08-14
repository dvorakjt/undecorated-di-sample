//logger.interface.ts

export interface Logger {
  log(message : any) : void;
}

export const LoggerKey = 'Logger';

export type LoggerKeyType = typeof LoggerKey;
