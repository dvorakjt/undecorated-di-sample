//plane.ts

import { autowire } from 'undecorated-di';
import { FlyableKey, type Flyable, type FlyableKeyType } from './flyable.interface';
import { LoggerKey, type Logger } from './logger.interface';

class Plane implements Flyable {
  constructor(public logger : Logger) {}

  fly() {
    this.logger.log('The pilot starts the engine, the propeller begins to spin, and the plane takes off.');
  }
}

export default autowire<FlyableKeyType, Flyable, Plane>(Plane, FlyableKey, [LoggerKey]);
