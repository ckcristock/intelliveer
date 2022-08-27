import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchStringPipe'
})
export class SearchStringPipePipe implements PipeTransform {

  transform(parm:any,items: any, term: any): any {
    if (term === undefined) {
      return items;
    }
    if(parm){
      console.log(parm)
      return items.filter((item:any) =>
          item[parm] != null &&
          item[parm]
            .toString()
            .toLowerCase()
            .includes(term.toLowerCase())
    );
    }
  }
}
