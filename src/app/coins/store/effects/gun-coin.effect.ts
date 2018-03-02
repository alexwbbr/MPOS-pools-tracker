import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {map, switchMap, catchError} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {CoinService} from '../../services/coinService';
import {gunCoinUrl} from '../../../common/static';
import * as gunCoinActions from '../actions/gun-coin.actions';
import {PoolResult} from '../../../common/interfaces/pool-results';

@Injectable()
export class GunCoinEffect {

  constructor(private actions$: Actions,
              private coinService: CoinService) {
  }

  @Effect()
  loadCoinData$ = this.actions$.ofType(gunCoinActions.LOAD_GUN_COIN).pipe(
    switchMap(() => {
      return this.coinService.getCoinData(gunCoinUrl).pipe(
        map((data: PoolResult) => new gunCoinActions.LoadGunCoinSuccess(data)),
        catchError(error => of(new gunCoinActions.LoadGunCoinFail(error)))
      );
    })
  );
}
