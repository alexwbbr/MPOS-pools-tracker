import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {AppComponent} from './app.component';
import {CoinsModule} from './coins/coins.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    CoinsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
