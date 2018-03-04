import {Action} from '@ngrx/store';
import {PoolResult} from '../../../common/interfaces/pool-results';

export const LOAD_COIN = '[Coin] Load Coin';
export const LOAD_COIN_SUCCESS = '[Coin] Load Coins Success';
export const LOAD_COIN_FAIL = '[Coin] Load Coins Success';

export class LoadCoin implements Action {
  readonly type = LOAD_COIN;
  constructor(public payload: number) {
  }
}

export class LoadCoinSuccess implements Action {
  readonly type = LOAD_COIN_SUCCESS;
  constructor(public payload: {coinData: PoolResult, id: number}) {
  }
}

export class LoadCoinFail implements Action {
  readonly type = LOAD_COIN_FAIL;
  constructor(public payload: {error: any, id: number}) {
  }
}

export type CoinActions = LoadCoin | LoadCoinSuccess | LoadCoinFail;
