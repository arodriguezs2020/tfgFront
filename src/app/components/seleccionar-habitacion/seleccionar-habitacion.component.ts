import { Component, OnInit } from '@angular/core';
import { Habitaciones } from 'src/app/entities/habitaciones';
import { ReservaDto } from 'src/app/entities/reserva-dto';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-seleccionar-habitacion',
  templateUrl: './seleccionar-habitacion.component.html',
  styleUrls: ['./seleccionar-habitacion.component.css']
})
export class SeleccionarHabitacionComponent implements OnInit {

  habitaciones: Habitaciones[] = [];
  fechas: ReservaDto = new ReservaDto();
  entrada2: string = ""
  salida2: string = ""

  constructor(public deseos: DeseosService) {

    let entrada = sessionStorage.getItem('entrada');
    let salida = sessionStorage.getItem('salida');
    this.salida2 = String(salida);
    this.entrada2 = String(entrada);

    this.fechas.entrada = new Date(this.entrada2);
    this.fechas.salida = new Date(this.salida2);

    console.log(this.fechas);

    deseos.getHabitacionesDisponibles(this.fechas).subscribe( data => {      
      this.habitaciones = data;
      console.log(this.habitaciones);
      
    });
  }
 
  ngOnInit(): void {
  }

}
