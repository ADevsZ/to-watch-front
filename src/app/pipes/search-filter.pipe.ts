import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: { title: string }, search: string) {
    // if (value) {
    //   const regExp = new RegExp(search, 'i');
    //   return Object.keys(value).some((property) => regExp.test(property));
    // }
    return null;
  }

}
