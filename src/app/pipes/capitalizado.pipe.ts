import { Pipe, PipeTransform } from '@angular/core';
import { Type } from '@angular/compiler';

@Pipe({
    name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {
    /* // para hacerlo con los argumentos separados
    transform(value: string, arg1, arg2): string {
        console.log( value );
        console.log( arg1 );
        console.log( arg2 );
        return "Hola mundo!";
    }
    */
    /*
    //para hacerlo con el arreglo de argumentos
    transform(value: string, ...args: any[] ): string {
        console.log( value );
        console.log( args );
        return "Hola mundo!";
    }*/
    /*
    transform(value: string): string {
        value = value.toLowerCase();
        let nombres = value.split(" ");
        for( let i in nombres ){
            nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1)
        }
    */
        //con parametro todas
        transform(value: string, todas:boolean = true ): string {
            value = value.toLowerCase();
            let nombres = value.split(" ");
            if ( todas  ){
                for( let i in nombres ){
                nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1);
                }
            } else {
                nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);

            }
        return nombres.join(" ");
    }
}
