import {IPoolList} from '../interfaces/pool-list';
import {PoolResult} from '../interfaces/pool-results';

export const trezarCoinUrl = '';
export const ufoCoinUrl = '';
export const gunCoinUrl = '';
export const featherCoinUrl = '';

export const poolsList: IPoolList = {
  1: {
    id: 1,
    name: 'The Official Trezarcoin Mining Pool',
    url: trezarCoinUrl,
    lastUpdated: '',
    loaded: false,
    loading: false,
    error: '',
    data: <PoolResult>{}
  },
  2: {
    id: 2,
    name: 'The Official Feathercoin Mining Pool',
    url: featherCoinUrl,
    lastUpdated: '',
    loaded: false,
    loading: false,
    error: '',
    data: <PoolResult>{}
  },
  3: {
    id: 3,
    name: 'Official Guncoin (GUN) Mining Pool',
    url: gunCoinUrl,
    lastUpdated: '',
    loaded: false,
    loading: false,
    error: '',
    data: <PoolResult>{}
  },
  4: {
    id: 4,
    name: 'The Official UFOcoin Mining Pool',
    url: ufoCoinUrl,
    lastUpdated: '',
    loaded: false,
    loading: false,
    error: '',
    data: <PoolResult>{}
  }
};
