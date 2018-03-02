import * as coinActions from '../actions/ufo-coin.actions';
import {PoolResult} from '../../../common/interfaces/pool-results';
import {CoinState} from '../../../common/interfaces/coin-reducer';

export const initialState: CoinState = {
  loaded: false,
  loading: false,
  coinData: <PoolResult>{},
  lastLoaded: ''
};

export function reducer(state = initialState, action: coinActions.UfoCoinActions): CoinState {
  switch (action.type) {
    case coinActions.LOAD_UFO_COIN: {
      return {
        ...state,
        loading: true
      };
    }
    case coinActions.LOAD_UFO_COIN_SUCCESS: {
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
    case coinActions.LOAD_UFO_COIN_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }
  return state;
}

export const getUfoCoinsLoading = (state: CoinState) => state ? state.loading : null;
export const getUfoCoinsLoaded = (state: CoinState) => state ? state.loaded : null;
export const getUfoCoinsData = (state: CoinState) => state ? state.coinData : null;
export const getUfoCoinsLastLoaded = (state: CoinState) => state ? state.lastLoaded : null;
