import { containerA } from './container-a';
import { containerB } from './container-b';
import { containerC } from './container-c';

//obviously, you would use more descriptive names, and likely would not import more than one container into one file
const loggerA = containerA.services.Logger; //in containerA, ConsoleLogger is registered to Logger
const loggerC = containerC.services.Logger; //in containerC, TextArtLogger is registered to Logger
const iFlyA = containerA.services.Flyable; // returns a new instance of the class registered as Flyable
const iFlyB = containerB.services.Flyable; //in containerB, Plane was registered to Flyable

loggerA.log('');
loggerC.log('Undecorated DI Sample');
loggerA.log('\nWelcome to a sample application built with undecorated-di.\n');
iFlyA.fly(); //logs 'The bird flaps its wings and soars into the air.'
iFlyB.fly(); //logs 'The pilot starts the engine, the propeller begins to spin, and the plane takes off.'
loggerA.log('');