import {createSelector} from '@ngrx/store';
import * as ufoCoinsReducer from '../reducers/ufo-coin.reducers';
import * as fromFeature from '../reducers';


export const getUfoCoinState = createSelector(fromFeature.getMainState,
  (state: fromFeature.CoinStoreState) => state.ufoCoin);

export const getUfoCoinsLoaded = createSelector(getUfoCoinState, ufoCoinsReducer.getUfoCoinsLoaded);
export const getUfoCoinsLoading = createSelector(getUfoCoinState, ufoCoinsReducer.getUfoCoinsLoading);
export const getUfoCoinsData = createSelector(getUfoCoinState, ufoCoinsReducer.getUfoCoinsData);
export const getUfoCoinsLastUpdated = createSelector(getUfoCoinState, ufoCoinsReducer.getUfoCoinsLastLoaded);
