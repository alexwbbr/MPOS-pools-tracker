import {Component, OnInit} from '@angular/core';
import * as fromStore from './coins/store_v2';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {poolsList} from './common/static';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public coinStates$: Observable<any>;

  constructor(private store: Store<fromStore.CoinStoreState>) {
    setInterval(() => {
      this.getAllPoolData();
    }, 5000);
    this.getAllPoolData();
  }

  public ngOnInit(): void {
    this.coinStates$ = this.store.select(fromStore.getAllPools);
  }

  /*
    As it's the same action being dispatched it needs to be delayed otherwise
    the service calls will get canceled and only the last one will work
   */
  public getAllPoolData(keys: string[] = Object.keys(poolsList)): void {
    const key = keys.pop();
    this.store.dispatch(new fromStore.LoadCoin(parseInt(key, 10)));
    if (keys.length > 0) {
      setTimeout(() => {
        this.getAllPoolData(keys);
      }, 600);
    }
  }
}
