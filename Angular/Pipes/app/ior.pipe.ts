import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ior'
})
export class IorPipe implements PipeTransform {

  transform(num: number): string {
    const romanNumeralMap: { [key: string]: number } = {
      'M': 1000,
      'CM': 900,
      'D': 500,
      'CD': 400,
      'C': 100,
      'XC': 90,
      'L': 50,
      'XL': 40,
      'X': 10,
      'IX': 9,
      'V': 5,
      'IV': 4,
      'I': 1
    };

    let result = '';
    for (let key in romanNumeralMap) {
      while (num >= romanNumeralMap[key]) {
        result += key;
        num -= romanNumeralMap[key];
      }
    }
    return result;
  }

}
