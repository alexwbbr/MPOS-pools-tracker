import * as coinActions from '../actions/treza-coin.actions';
import {PoolResult} from '../../../common/interfaces/pool-results';
import {CoinState} from '../../../common/interfaces/coin-reducer';

export const initialState: CoinState = {
  loaded: false,
  loading: false,
  coinData: <PoolResult>{},
  lastLoaded: ''
};

export function reducer(state = initialState, action: coinActions.TrezaCoinActions): CoinState {
  switch (action.type) {
    case coinActions.LOAD_TREZA_COIN: {
      return {
        ...state,
        loading: true
      };
    }
    case coinActions.LOAD_TREZA_COIN_SUCCESS: {
      const coinData = action.payload;
      const lastLoaded = new Date().toTimeString();
      return {
        ...state,
        loading: false,
        loaded: true,
        coinData,
        lastLoaded
      };
    }
    case coinActions.LOAD_TREZA_COIN_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }
  return state;
}

export const getTrezaCoinsLoading = (state: CoinState) => state ? state.loading : null;
export const getTrezaCoinsLoaded = (state: CoinState) => state ? state.loaded : null;
export const getTrezaCoinsData = (state: CoinState) => state ? state.coinData : null;
export const getTrezaCoinsLastLoaded = (state: CoinState) => state ? state.lastLoaded : null;
