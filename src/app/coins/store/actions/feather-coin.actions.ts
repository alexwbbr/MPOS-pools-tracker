import {Action} from '@ngrx/store';
import {PoolResult} from '../../../common/interfaces/pool-results';

export const LOAD_FEATHER_COIN = '[Feather Coin] Load Coin';
export const LOAD_FEATHER_COIN_SUCCESS = '[Feather Coin] Load Coins Success';
export const LOAD_FEATHER_COIN_FAIL = '[Feather Coin] Load Coins Success';

export class LoadFeatherCoin implements Action {
  readonly type = LOAD_FEATHER_COIN;
}

export class LoadFeatherCoinSuccess implements Action {
  readonly type = LOAD_FEATHER_COIN_SUCCESS;

  constructor(public payload: PoolResult) {
  }
}

export class LoadFeatherCoinFail implements Action {
  readonly type = LOAD_FEATHER_COIN_FAIL;

  constructor(public payload: any) {
  }
}

export type FeatherCoinActions = LoadFeatherCoin | LoadFeatherCoinSuccess | LoadFeatherCoinFail;
