//console-logger.ts

import { autowire } from 'undecorated-di';
import { LoggerKey, type Logger, type LoggerKeyType } from './logger.interface';

class ConsoleLogger implements Logger {
  log(message : any) {
    console.log(message);
  }
}

export default autowire<LoggerKeyType, Logger, ConsoleLogger>(ConsoleLogger, LoggerKey);
