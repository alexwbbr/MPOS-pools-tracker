import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {map, switchMap, catchError} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {CoinService} from '../../services/coinService';
import {featherCoinUrl} from '../../../common/static';
import * as featherCoinActions from '../actions/feather-coin.actions';
import {PoolResult} from '../../../common/interfaces/pool-results';

@Injectable()
export class FeatherCoinEffect {

  constructor(private actions$: Actions,
              private coinService: CoinService) {
  }

  @Effect()
  loadCoinData$ = this.actions$.ofType(featherCoinActions.LOAD_FEATHER_COIN).pipe(
    switchMap(() => {
      return this.coinService.getCoinData(featherCoinUrl).pipe(
        map((data: PoolResult) => new featherCoinActions.LoadFeatherCoinSuccess(data)),
        catchError(error => of(new featherCoinActions.LoadFeatherCoinFail(error)))
      );
    })
  );
}
