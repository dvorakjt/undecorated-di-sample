import { autowire } from 'undecorated-di';
import { LoggerKey, type LoggerKeyType, type Logger } from './logger.interface';
import figlet from 'figlet';

class TextArtLogger implements Logger {
  log(message: any): void {
    const textArt = figlet.textSync(message.toString());
    console.log(textArt);
  }
}

export default autowire<LoggerKeyType, Logger, TextArtLogger>(TextArtLogger, LoggerKey);