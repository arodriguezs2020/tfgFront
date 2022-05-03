import { Component, OnInit } from '@angular/core';
import { Habitaciones } from 'src/app/entities/habitaciones';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})
export class HabitacionesComponent implements OnInit {

  habitaciones: Habitaciones[] = [];

  mostrar = false

  constructor(public deseos: DeseosService) {
    deseos.getHabitaciones().subscribe(data => {
      this.habitaciones = data;
      console.log(data);
    })
  }

  ngOnInit(): void {
    this.deseos.userMe().subscribe(user => {
      this.mostrar = true;
    })
  }

  deleteRoom(id: number) {
    this.deseos.deleteHabitacion(id).subscribe()
    location.reload()
  }

}