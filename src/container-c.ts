import { ContainerBuilder } from "undecorated-di";
import TextArtLoggerService from './text-art-logger';

const containerC = ContainerBuilder
  .createContainerBuilder()
  .registerSingletonService(TextArtLoggerService)
  .build();

export { containerC };