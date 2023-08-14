//bird.ts

import { autowire } from 'undecorated-di';
import { FlyableKey, type Flyable, type FlyableKeyType } from './flyable.interface';
import { LoggerKey, type Logger } from './logger.interface';

class Bird implements Flyable {
  constructor(public logger : Logger) {}

  fly() {
    this.logger.log('The bird flaps its wings and soars into the air.');
  }
}

export default autowire<FlyableKeyType, Flyable, Bird>(Bird, FlyableKey, [LoggerKey]);
