import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})

export class FilterPipe implements PipeTransform {
    transform(value: any, filterstring: string, property: string): any{

        const result = [];
        
        if (value.length === 0 || filterstring ===''){
            return value
        }
        for (const item of value){
            if (item[property] === filterstring){
                result.push(item)
            }
        }
        return result;
        
        //return FilterPipe.filter(value, filterstring, property);
    }

    // static filter(value: any, term: string, property: any){
    //     const result = [];
        
    //     if (value.length === 0 || term ===''){
    //         return value
    //     }
    //     for (const item of value){
    //         if (item[property] === term){
    //             result.push(item)
    //         }
    //     }
    //     return result;
    // }
}