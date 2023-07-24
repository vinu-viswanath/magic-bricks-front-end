import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allhouses:any[],searchTerm:string,propertyName:string): any[] {

    //for holding the search result
    const result:any[]=[];
    
    if(!allhouses||searchTerm==''||propertyName==''){
        return allhouses;
    }

    allhouses.forEach((item:any)=>{

      //propertyName = SearchTerm
      if(item[propertyName].trim().toLowerCase().includes(searchTerm.trim().toLowerCase())){
        result.push(item)

      }
    })
    
    return result;
  }

}
