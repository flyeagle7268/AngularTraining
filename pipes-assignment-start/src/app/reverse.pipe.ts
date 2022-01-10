import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    if (value.leng === 0) return value;

    return value.split('').reverse().join('');

    // let output =  Array.from(value)
    //   .reverse().join('');


    // return output;
  }

}
