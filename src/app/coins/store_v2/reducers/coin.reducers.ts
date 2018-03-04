import * as coinActions from '../actions/coin.actions';
import {CoinState2} from '../../../common/interfaces/coin-reducer';
import {poolsList} from '../../../common/static';

export const initialState: CoinState2 = {
  entities: poolsList
};

export function reducer(state = initialState, action: coinActions.CoinActions): CoinState2 {
  switch (action.type) {
    case coinActions.LOAD_COIN: {
      const poolId = action.payload;
      state.entities[poolId].loading = true;
      return {
        ...state
      };
    }
    case coinActions.LOAD_COIN_SUCCESS: {
      const success = action.payload;
      state.entities[success.id].data = success['coinData'];
      state.entities[success.id].lastUpdated = new Date().toTimeString();
      return {
        ...state
      };
    }
    case coinActions.LOAD_COIN_FAIL: {
      const error = action.payload;
      state.entities[error.id].data = error['error'];
      return {
        ...state
      };
    }
  }
  return state;
}

export const getCoinEntities = (state: CoinState2) => state ? state.entities : null;
