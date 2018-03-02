import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {CoinService} from './services/coinService';
import {effects, reducers} from './store';
import {HttpClientModule} from '@angular/common/http';
import * as fromComponents from './components';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    StoreModule.forFeature('coinsStore', reducers),
    EffectsModule.forFeature(effects),
    HttpClientModule
  ],
  providers: [
    CoinService
  ],
  declarations: [...fromComponents.components],
  exports: [...fromComponents.components]
})
export class CoinsModule {
}
