import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letter'
})
export class LetterPipe implements PipeTransform {

  transform(value: string): string {
    let result='';
    for(let i=0;i<value.length;i++)
    {
        if(value[i]==value[i].toUpperCase())
        {
          result=result+'@';
        }
        else if(value[i]==' ')
        {  continue;
          
        }
        else{
          result=result+'#';
        }
    }
    return result;
  }

}
