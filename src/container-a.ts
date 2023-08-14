//container-a.ts

import { ContainerBuilder } from 'undecorated-di';
import BirdService from './bird';
import ConsoleLoggerService from './console-logger';

const containerA = ContainerBuilder
  .createContainerBuilder()
  .registerTransientService(BirdService) //order does not matter, even if there are dependencies
  .registerTransientService(ConsoleLoggerService)
  .build();

export { containerA }; 
