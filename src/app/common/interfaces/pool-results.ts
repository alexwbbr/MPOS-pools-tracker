export interface PoolResult {
  getpoolstatus: IPoolStatus;
}

export interface IPoolStatus {
  runtime: number;
  version: string;
  data: IPoolData;
}

export interface IPoolData {
  currentnetworkblock: number;
  efficiency: number;
  estshares: number;
  esttime: number;
  hashrate: number;
  lastblock: number;
  nethashrate: number;
  networkdiff: number;
  nextnetworkblock: number;
  pool_name: string;
  progress: number;
  timesincelast: number;
  workers: number;
}
