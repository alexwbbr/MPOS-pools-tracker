import {Component, Input} from '@angular/core';
import {IPoolObject} from '../../../common/interfaces/pool-list';

@Component({
  selector: 'coin-display-table-v2',
  styleUrls: ['./coinDisplayTable.component.css'],
  templateUrl: './coinDisplayTable.component.html'
})
export class CoinDisplayTableV2Component {

  @Input()
  public coinDataRaw: IPoolObject;

}
