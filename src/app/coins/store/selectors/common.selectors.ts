import {createSelector} from '@ngrx/store';
import * as fromTrezaCoin from './treza-coins.selectors';
import * as fromFeatherCoin from './feather-coins.selectors';
import * as fromGunCoin from './gun-coins.selectors';
import * as fromUfoCoin from './ufo-coins.selectors';

export const getAllCoins = createSelector(
  fromTrezaCoin.getTrezaCoinState,
  fromFeatherCoin.getFeatherCoinState,
  fromGunCoin.getGunCoinState,
  fromUfoCoin.getUfoCoinState,
  (trezaCoin, featherCoin, gunCoin, ufoCoin) => {
    return [trezaCoin, featherCoin, gunCoin, ufoCoin];
  }
);
