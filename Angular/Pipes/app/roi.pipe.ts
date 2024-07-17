import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roi'
})
export class RoiPipe implements PipeTransform {

  transform(roman: string): number {
    const romanNumeralMap: { [key: string]: number } = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };

    let num = 0;
    for (let i = 0; i < roman.length; i++) {
      const current = romanNumeralMap[roman[i]];
      const next = romanNumeralMap[roman[i + 1]];

      if (next && current < next) {
        num -= current;
      } else {
        num += current;
      }
    }
    return num;
  }

}
