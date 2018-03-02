import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {map, switchMap, catchError} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {CoinService} from '../../services/coinService';
import {ufoCoinUrl} from '../../../common/static';
import * as ufoCoinActions from '../actions/ufo-coin.actions';
import {PoolResult} from '../../../common/interfaces/pool-results';

@Injectable()
export class UfoCoinEffect {

  constructor(private actions$: Actions,
              private coinService: CoinService) {
  }

  @Effect()
  loadCoinData$ = this.actions$.ofType(ufoCoinActions.LOAD_UFO_COIN).pipe(
    switchMap(() => {
      return this.coinService.getCoinData(ufoCoinUrl).pipe(
        map((data: PoolResult) => new ufoCoinActions.LoadUfoCoinSuccess(data)),
        catchError(error => of(new ufoCoinActions.LoadUfoCoinFail(error)))
      );
    })
  );
}
