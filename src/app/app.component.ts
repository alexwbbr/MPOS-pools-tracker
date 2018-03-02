import {Component, OnInit} from '@angular/core';
import * as fromStore from './coins/store';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public coinStates$: Observable<any>;

  constructor(private store: Store<fromStore.CoinStoreState>) {
    setInterval(() => {
      this.store.dispatch(new fromStore.LoadAllCoins());
    }, 5000);
    this.store.dispatch(new fromStore.LoadAllCoins());
  }

  public ngOnInit(): void {
    this.coinStates$ = this.store.select(fromStore.getAllCoins);
  }
}
