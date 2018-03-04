import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import * as fromActions from '../actions';
import {poolsList} from '../../../common/static';
import {of} from 'rxjs/observable/of';
import {PoolResult} from '../../../common/interfaces/pool-results';
import {CoinService} from '../../services/coinService';

@Injectable()
export class CommonCoinEffect {

  constructor(private actions$: Actions,
              private coinService: CoinService) {
  }

  @Effect()
  loadCoinData$ = this.actions$.ofType(fromActions.LOAD_COIN).pipe(
    switchMap((action: fromActions.LoadCoin) => {
      const id = action.payload;
      const poolUrl = poolsList[id].url;
      return this.coinService.getCoinData(poolUrl).pipe(
        map((data: PoolResult) => new fromActions.LoadCoinSuccess({coinData: data, id: id})),
        catchError(error => of(new fromActions.LoadCoinFail({error: error, id: id})))
      );
    })
  );
}
