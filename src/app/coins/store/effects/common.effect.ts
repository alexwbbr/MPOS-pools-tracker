import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {switchMap} from 'rxjs/operators';
import * as fromActions from '../actions';

@Injectable()
export class CommonCoinEffect {

  constructor(private actions$: Actions) {
  }

  @Effect()
  loadCoinData$ = this.actions$.ofType(fromActions.LOAD_ALL_COINS).pipe(
    switchMap(() => {
      return [
        new fromActions.LoadTrezaCoin(),
        new fromActions.LoadFeatherCoin(),
        new fromActions.LoadGunCoin(),
        new fromActions.LoadUfoCoin()
      ];
    })
  );
}
