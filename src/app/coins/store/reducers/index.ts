import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import * as fromCoins from './treza-coin.reducers';
import * as fromFeatherCoins from './feather-coin.reducers';
import * as fromGunCoins from './gun-coin.reducers';
import * as fromUfoCoins from './ufo-coin.reducers';
import {CoinState} from '../../../common/interfaces/coin-reducer';

export interface CoinStoreState {
  trezaCoin: CoinState;
  featherCoin: CoinState;
  gunCoin: CoinState;
  ufoCoin: CoinState;
}

export const reducers: ActionReducerMap<CoinStoreState> = {
  trezaCoin: fromCoins.reducer,
  featherCoin: fromFeatherCoins.reducer,
  gunCoin: fromGunCoins.reducer,
  ufoCoin: fromUfoCoins.reducer
};

export const getMainState = createFeatureSelector<CoinStoreState>('coinsStore');
