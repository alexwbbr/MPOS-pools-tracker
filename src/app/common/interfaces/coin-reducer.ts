import {PoolResult} from './pool-results';
import {IPoolList} from './pool-list';

export interface CoinState {
  loaded: boolean;
  loading: boolean;
  coinData: PoolResult;
  lastLoaded: string;
}

export interface CoinState2 {
  entities: IPoolList;
}
