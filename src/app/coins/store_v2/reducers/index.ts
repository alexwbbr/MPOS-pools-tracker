import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import * as fromCoins from './coin.reducers';
import {CoinState2} from '../../../common/interfaces/coin-reducer';

export interface CoinStoreState {
  coinData: CoinState2;
}

export const reducers: ActionReducerMap<CoinStoreState> = {
  coinData: fromCoins.reducer
};

export const getMainState = createFeatureSelector<CoinStoreState>('coinsStore');
