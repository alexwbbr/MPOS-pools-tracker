import * as coinActions from '../actions/feather-coin.actions';
import {PoolResult} from '../../../common/interfaces/pool-results';
import {CoinState} from '../../../common/interfaces/coin-reducer';

export const initialState: CoinState = {
  loaded: false,
  loading: false,
  coinData: <PoolResult>{},
  lastLoaded: ''
};

export function reducer(state = initialState, action: coinActions.FeatherCoinActions): CoinState {
  switch (action.type) {
    case coinActions.LOAD_FEATHER_COIN: {
      return {
        ...state,
        loading: true
      };
    }
    case coinActions.LOAD_FEATHER_COIN_SUCCESS: {
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
    case coinActions.LOAD_FEATHER_COIN_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }
  return state;
}

export const getFeatherCoinsLoading = (state: CoinState) => state ? state.loading : null;
export const getFeatherCoinsLoaded = (state: CoinState) => state ? state.loaded : null;
export const getFeatherCoinsData = (state: CoinState) => state ? state.coinData : null;
export const getFeatherCoinsLastLoaded = (state: CoinState) => state ? state.lastLoaded : null;
