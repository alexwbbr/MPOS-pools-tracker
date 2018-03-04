import {createSelector} from '@ngrx/store';
import * as coinsReducer from '../reducers/coin.reducers';
import * as fromFeature from '../reducers';


export const getCoinState = createSelector(fromFeature.getMainState,
  (state: fromFeature.CoinStoreState) => state.coinData);

export const getCoinsEntities = createSelector(getCoinState, coinsReducer.getCoinEntities);
export const getAllPools = createSelector(getCoinsEntities, (entities) => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});
