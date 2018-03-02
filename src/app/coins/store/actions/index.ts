import {Action} from '@ngrx/store';

export const LOAD_ALL_COINS = '[Coins] Load All coins';
export class LoadAllCoins implements Action {
  readonly type = LOAD_ALL_COINS;
}

export * from './treza-coin.actions';
export * from './feather-coin.actions';
export * from './gun-coin.actions';
export * from './ufo-coin.actions';

