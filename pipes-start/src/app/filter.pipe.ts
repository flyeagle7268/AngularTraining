import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filter: string, propName: string) {
    if (value.length === 0 || filter === ''){
      return value;
    }

    const resultArray = [];
    value.forEach(item => {
      if (item[propName].startsWith(filter) ){
        resultArray.push(item);
      }
    });

    return resultArray;
  }
}
