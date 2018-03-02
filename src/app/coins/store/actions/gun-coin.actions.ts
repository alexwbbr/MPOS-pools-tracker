import {Action} from '@ngrx/store';
import {PoolResult} from '../../../common/interfaces/pool-results';

export const LOAD_GUN_COIN = '[Gun Coin] Load Coin';
export const LOAD_GUN_COIN_SUCCESS = '[Gun Coin] Load Coins Success';
export const LOAD_GUN_COIN_FAIL = '[Gun Coin] Load Coins Success';

export class LoadGunCoin implements Action {
  readonly type = LOAD_GUN_COIN;
}

export class LoadGunCoinSuccess implements Action {
  readonly type = LOAD_GUN_COIN_SUCCESS;

  constructor(public payload: PoolResult) {
  }
}

export class LoadGunCoinFail implements Action {
  readonly type = LOAD_GUN_COIN_FAIL;

  constructor(public payload: any) {
  }
}

export type GunCoinActions = LoadGunCoin | LoadGunCoinSuccess | LoadGunCoinFail;
