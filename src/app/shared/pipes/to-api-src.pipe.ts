import { Pipe, PipeTransform } from '@angular/core';
import { host } from './../services/hero.service';

@Pipe({name: 'toApiSrc'})
export class ToApiSrc {
  transform(value: string): string {
    if (value) {
      return host + value;
    }
    return value;
  }
}