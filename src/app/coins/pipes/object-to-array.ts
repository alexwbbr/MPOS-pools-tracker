import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'objectToArray'})
export class ObjectToArrayPipe implements PipeTransform {
  transform(value: Object): Array<string> {
    if (value) {
      return Object.keys(value);
    } else {
      return [];
    }
  }
}
