import {Action} from '@ngrx/store';
import {PoolResult} from '../../../common/interfaces/pool-results';

export const LOAD_UFO_COIN = '[UFO Coin] Load Coin';
export const LOAD_UFO_COIN_SUCCESS = '[UFO Coin] Load Coins Success';
export const LOAD_UFO_COIN_FAIL = '[UFO Coin] Load Coins Success';

export class LoadUfoCoin implements Action {
  readonly type = LOAD_UFO_COIN;
}

export class LoadUfoCoinSuccess implements Action {
  readonly type = LOAD_UFO_COIN_SUCCESS;

  constructor(public payload: PoolResult) {
  }
}

export class LoadUfoCoinFail implements Action {
  readonly type = LOAD_UFO_COIN_FAIL;

  constructor(public payload: any) {
  }
}

export type UfoCoinActions = LoadUfoCoin | LoadUfoCoinSuccess | LoadUfoCoinFail;
