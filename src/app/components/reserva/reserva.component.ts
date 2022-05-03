import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Habitaciones } from 'src/app/entities/habitaciones';
import { Reserva } from 'src/app/entities/reserva';
import { DeseosService } from 'src/app/services/deseos.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Time } from '@angular/common';
import { Timestamp } from 'rxjs/internal/operators/timestamp';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  identificador: number = 0;
  habitacion: Habitaciones = new Habitaciones();
  reserva: Reserva = new Reserva();

  reservaForm = new FormGroup({
    nombre: new FormControl('',Validators.required),
    telefono: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    pais: new FormControl('', Validators.required),
    horario: new FormControl('', Validators.required),
    tranfer: new FormControl(true, Validators.required),
    security: new FormControl(true, Validators.required),
  });

  nombre: string = "";
  telefono: string = "";
  email: string = "";
  pais: string = "España";
  entrada: Date = new Date;
  salida: Date = new  Date;
  horario: string = "";
  tranfer: boolean = false;
  totalDinero: string = "2000";

  entrada2: string = ""
  salida2: string = ""

  paises: any

  constructor(private route: ActivatedRoute, private router: Router, private deseos: DeseosService) {
    console.log(this.route.snapshot.paramMap.get('id'));
    this.identificador = Number(this.route.snapshot.paramMap.get('id'));

    this.deseos.getHabtacionByID(this.identificador).subscribe(habitacion => {
      this.habitacion = habitacion
      console.log(this.habitacion);
    }); 

    this.deseos.getPaises().subscribe(paises => {
      this.paises = paises
      console.log(this.paises);
    });

    let entrada = sessionStorage.getItem('entrada');
    let salida = sessionStorage.getItem('salida');
    this.salida2 = String(salida);
    this.entrada2 = String(entrada);

    this.entrada = new Date(this.entrada2)
    this.salida = new Date(this.salida2)
  
  }

  ngOnInit(): void {
  }

  onSubmit() {

    let dineroPorDia = this.habitacion.precio
    console.log(dineroPorDia);

    let diferencia =  this.entrada.getDate() - this.salida.getDay();
    console.log(diferencia);

    let dineroTotal = dineroPorDia * diferencia;
    console.log(dineroTotal);

    this.totalDinero = String(dineroTotal)
    console.log(this.totalDinero);
  
    this.reserva = new Reserva(this.nombre, this.entrada, this.salida, this.pais, this.horario, this.tranfer, this.telefono, this.email, this.habitacion, 0, this.totalDinero);
    console.log(this.reserva);

    this.identificador = Number(this.route.snapshot.paramMap.get('id'));
  
    this.deseos.addReserva(this.reserva).subscribe(reserva => {
      console.log(reserva);
      this.router.navigateByUrl('');
    });
  }
}
