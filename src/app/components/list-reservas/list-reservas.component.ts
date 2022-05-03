import { Component, OnInit } from '@angular/core';
import { Reserva } from 'src/app/entities/reserva';
import { DeseosService } from '../../services/deseos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-reservas',
  templateUrl: './list-reservas.component.html',
  styleUrls: ['./list-reservas.component.css']
})
export class ListReservasComponent implements OnInit {

  textoInput: string = ""
  textoBuscar: string = ""
  reservas: Reserva[] = []

  constructor(private deseos: DeseosService) { 
    deseos.getReservas().subscribe(reservas => {
      this.reservas = reservas.content
      console.log(this.reservas);
    });
  }

  ngOnInit(): void {
  }

  buscarReserva(event: any) {
    const texto = event.target.value
    this.textoBuscar = texto;
    console.log(texto);
  }

  deleteReserva(id: number) {
    this.deseos.deleteReserva(id).subscribe(data => {
      console.log(data);
      location.reload();
    })
  }
}