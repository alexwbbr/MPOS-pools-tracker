import {createSelector} from '@ngrx/store';
import * as gunCoinsReducer from '../reducers/gun-coin.reducers';
import * as fromFeature from '../reducers';


export const getGunCoinState = createSelector(fromFeature.getMainState,
  (state: fromFeature.CoinStoreState) => state.gunCoin);

export const getGunCoinsLoaded = createSelector(getGunCoinState, gunCoinsReducer.getGunCoinsLoaded);
export const getGunCoinsLoading = createSelector(getGunCoinState, gunCoinsReducer.getGunCoinsLoading);
export const getGunCoinsData = createSelector(getGunCoinState, gunCoinsReducer.getGunCoinsData);
export const getGunCoinsLastUpdated = createSelector(getGunCoinState, gunCoinsReducer.getGunCoinsLastLoaded);

