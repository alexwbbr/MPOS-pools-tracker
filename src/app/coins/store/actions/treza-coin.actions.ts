import {Action} from '@ngrx/store';
import {PoolResult} from '../../../common/interfaces/pool-results';

export const LOAD_TREZA_COIN = '[Treza Coin] Load Coin';
export const LOAD_TREZA_COIN_SUCCESS = '[Treza Coin] Load Coins Success';
export const LOAD_TREZA_COIN_FAIL = '[Treza Coin] Load Coins Success';

export class LoadTrezaCoin implements Action {
  readonly type = LOAD_TREZA_COIN;
}

export class LoadTrezaCoinSuccess implements Action {
  readonly type = LOAD_TREZA_COIN_SUCCESS;

  constructor(public payload: PoolResult) {
  }
}

export class LoadTrezaCoinFail implements Action {
  readonly type = LOAD_TREZA_COIN_FAIL;

  constructor(public payload: any) {
  }
}

export type TrezaCoinActions = LoadTrezaCoin | LoadTrezaCoinSuccess | LoadTrezaCoinFail;
