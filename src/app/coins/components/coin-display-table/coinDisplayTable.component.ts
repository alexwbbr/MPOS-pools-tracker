import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {IPoolData} from '../../../common/interfaces/pool-results';
import {CoinState} from '../../../common/interfaces/coin-reducer';

@Component({
  selector: 'coin-display-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./coinDisplayTable.component.css'],
  templateUrl: './coinDisplayTable.component.html'
})
export class CoinDisplayTableComponent implements OnChanges {

  @Input()
  public coinDataRaw: CoinState;

  public displayCoinData: IPoolData;
  public dataKeys: string[];

  constructor() {
  }

  public ngOnChanges(changes: SimpleChanges) {
    const coinDataRaw = changes['coinDataRaw'];
    if (coinDataRaw.currentValue && this.coinDataRaw.coinData.getpoolstatus) {
      this.displayCoinData = this.coinDataRaw.coinData.getpoolstatus.data;
      this.dataKeys = Object.keys(this.displayCoinData);
      // removes the first key which is the title
      this.dataKeys.shift();
    }
  }
}
