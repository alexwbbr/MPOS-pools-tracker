import {PoolResult} from './pool-results';

export interface IPoolList {
  [id: number]: IPoolObject;
}

export interface IPoolObject {
  id: number;
  name: string;
  url: string;
  lastUpdated: string;
  loaded: boolean;
  loading: boolean;
  error: string;
  data: PoolResult;
}
