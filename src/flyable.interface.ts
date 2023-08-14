//flyable.interface.ts

export interface Flyable {
  fly() : void;
}

export const FlyableKey = 'Flyable';

export type FlyableKeyType = typeof FlyableKey;
