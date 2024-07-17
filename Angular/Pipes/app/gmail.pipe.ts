import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gmail'
})
export class GmailPipe implements PipeTransform {

  transform(str:string ): string {
    return str+'@gmail.com';
  }

}
