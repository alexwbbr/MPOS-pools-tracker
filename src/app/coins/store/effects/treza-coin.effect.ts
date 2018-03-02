import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {map, switchMap, catchError} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {CoinService} from '../../services/coinService';
import {trezarCoinUrl} from '../../../common/static';
import * as trezaCoinActions from '../actions/treza-coin.actions';
import {PoolResult} from '../../../common/interfaces/pool-results';

@Injectable()
export class TrezaCoinEffect {

  constructor(private actions$: Actions,
              private coinService: CoinService) {
  }

  @Effect()
  loadCoinData$ = this.actions$.ofType(trezaCoinActions.LOAD_TREZA_COIN).pipe(
    switchMap(() => {
      return this.coinService.getCoinData(trezarCoinUrl).pipe(
        map((data: PoolResult) => new trezaCoinActions.LoadTrezaCoinSuccess(data)),
        catchError(error => of(new trezaCoinActions.LoadTrezaCoinFail(error)))
      );
    })
  );
}
