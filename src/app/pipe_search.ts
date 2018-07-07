import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any, searchText: string): any[] {
    console.log("Hello World")
    console.log(items);
    if(!items) return [];
    if(!searchText) return items;
searchText = searchText.toLowerCase();
console.log(searchText);
console.log(items);
if(items.toLowerCase().includes(searchText))
{
return items;

}


// return items.filter( it => {
//   console.log(it); 
//       return it.toLowerCase().includes(searchText);
      
//     });

   }
}