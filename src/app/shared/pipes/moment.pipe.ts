import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';

@Pipe({name: 'moment'})
export class MomentPipe implements PipeTransform {
  transform(value: number): string {
    return moment(value).format('DD/MM/YYYY');
  }
}

@Pipe({name: 'momentShort'})
export class MomentShortPipe implements PipeTransform {
  transform(value: number): string {
    return moment(value).format('DD/MM');
  }
}

@Pipe({name: 'momentFull'})
export class MomentFullPipe implements PipeTransform {
  transform(value: number): string {
    return moment(value).format('DD/MM/YYYY HH:mm');
  }
}