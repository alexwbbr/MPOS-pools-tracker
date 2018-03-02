import {PoolResult} from './pool-results';

export interface CoinState {
  loaded: boolean;
  loading: boolean;
  coinData: PoolResult;
  lastLoaded: string;
}
