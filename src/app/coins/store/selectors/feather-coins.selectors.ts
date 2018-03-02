import {createSelector} from '@ngrx/store';
import * as featherCoinsReducer from '../reducers/feather-coin.reducers';
import * as fromFeature from '../reducers';


export const getFeatherCoinState = createSelector(fromFeature.getMainState,
  (state: fromFeature.CoinStoreState) => state.featherCoin);

export const getFeatherCoinsLoaded = createSelector(getFeatherCoinState, featherCoinsReducer.getFeatherCoinsLoaded);
export const getFeatherCoinsLoading = createSelector(getFeatherCoinState, featherCoinsReducer.getFeatherCoinsLoading);
export const getFeatherCoinsData = createSelector(getFeatherCoinState, featherCoinsReducer.getFeatherCoinsData);
export const getFeatherCoinsLastUpdated = createSelector(getFeatherCoinState, featherCoinsReducer.getFeatherCoinsLastLoaded);

