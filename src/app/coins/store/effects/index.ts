import {TrezaCoinEffect} from './treza-coin.effect';
import {FeatherCoinEffect} from './feather-coin.effect';
import {GunCoinEffect} from './gun-coin.effect';
import {UfoCoinEffect} from './ufo-coin.effect';
import {CommonCoinEffect} from './common.effect';

export const effects: any[] = [
  TrezaCoinEffect,
  FeatherCoinEffect,
  GunCoinEffect,
  UfoCoinEffect,
  CommonCoinEffect
];

export * from './treza-coin.effect';
export * from './feather-coin.effect';
export * from './gun-coin.effect';
export * from './ufo-coin.effect';
export * from './common.effect';
