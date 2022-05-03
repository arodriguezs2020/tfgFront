import { Pipe, PipeTransform } from '@angular/core';
import { Reserva } from '../entities/reserva';


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(reservas: Reserva[], texto: string ): Reserva[] {
    
    if( texto.length === 0 ){ return reservas; }

    texto = texto.toLocaleLowerCase();

    return reservas.filter( reservas => {
      return reservas.email.toLocaleLowerCase().includes(texto);
    });

  }

}
