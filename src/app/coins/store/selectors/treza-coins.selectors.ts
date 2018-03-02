import {createSelector} from '@ngrx/store';
import * as trezaCoinsReducer from '../reducers/treza-coin.reducers';
import * as fromFeature from '../reducers';


export const getTrezaCoinState = createSelector(fromFeature.getMainState,
  (state: fromFeature.CoinStoreState) => state.trezaCoin);

export const getTrezaCoinsLoaded = createSelector(getTrezaCoinState, trezaCoinsReducer.getTrezaCoinsLoaded);
export const getTrezaCoinsLoading = createSelector(getTrezaCoinState, trezaCoinsReducer.getTrezaCoinsLoading);
export const getTrezaCoinsData = createSelector(getTrezaCoinState, trezaCoinsReducer.getTrezaCoinsData);
export const getTrezaCoinsLastUpdated = createSelector(getTrezaCoinState, trezaCoinsReducer.getTrezaCoinsLastLoaded);

