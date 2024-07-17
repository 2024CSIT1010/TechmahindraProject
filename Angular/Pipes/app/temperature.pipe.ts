import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {

  transform(w: number): number {
    let x= ((9 *w)/5) +32;
    return x;
  }

}
