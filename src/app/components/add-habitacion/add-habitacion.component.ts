import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Habitaciones } from 'src/app/entities/habitaciones';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-add-habitacion',
  templateUrl: './add-habitacion.component.html',
  styleUrls: ['./add-habitacion.component.css']
})
export class AddHabitacionComponent implements OnInit {

  photo: string = "";
  titulo: string = "";
  descripcion: string = "";
  precio: number = 0;
  huespedes: number = 2;
  tipo: string = "Normal";

  addHabitacion = new FormGroup({
    photo: new FormControl('',Validators.required),
    titulo: new FormControl('',Validators.required),
    descripcion: new FormControl('', Validators.required),
    precio: new FormControl(0, Validators.required),
    tipo: new FormControl('Normal', Validators.required),
    huespedes: new FormControl('', Validators.required)
  });

  habitacion ?: Habitaciones

  constructor(private router: Router, private deseos: DeseosService) { }

  ngOnInit(): void {
  }

  onSubmit(){

    this.habitacion = new Habitaciones(this.titulo, this.descripcion, this.precio, this.photo, this.tipo, this.huespedes)

    this.deseos.addHabitacion(this.habitacion).subscribe( data => {
      this.router.navigateByUrl('habitacion');
    });
  }
}
