//container-b.ts
import { ContainerBuilder } from 'undecorated-di';
import PlaneService from './plane';
import ConsoleLoggerService from './console-logger';

/* Here, we register services as singletons. Only one instance of a singleton service is created, per container,
   even if it was first accessed indirectly by a dependent class.
*/

const containerB = ContainerBuilder
  .createContainerBuilder()
  .registerSingletonService(PlaneService) 
  .registerSingletonService(ConsoleLoggerService)
  .build();

export { containerB };
