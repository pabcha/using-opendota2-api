import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'toPercentage'})
export class ToPercentagePipe implements PipeTransform {
  transform(value: number): number {
    if (value) {
      return value / 100;
    }
    return value;
  }
}