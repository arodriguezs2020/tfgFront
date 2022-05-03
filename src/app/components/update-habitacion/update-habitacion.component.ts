import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Habitaciones } from 'src/app/entities/habitaciones';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-update-habitacion',
  templateUrl: './update-habitacion.component.html',
  styleUrls: ['./update-habitacion.component.css']
})
export class UpdateHabitacionComponent implements OnInit {

  identificador: number = 0;

  photo: string = "";
  titulo: string = "";
  descripcion: string = "";
  precio: number = 0;
  huespedes: number = 2;
  tipo: string = "";

  updateHabitacion = new FormGroup({
    photo: new FormControl('',Validators.required),
    titulo: new FormControl('',Validators.required),
    descripcion: new FormControl('', Validators.required),
    precio: new FormControl(0, Validators.required),
    huespedes: new FormControl('', Validators.required)
  });

  constructor(private route: ActivatedRoute, private router: Router, private deseos: DeseosService) {
    console.log(this.route.snapshot.paramMap.get('id'));
    this.identificador = Number(this.route.snapshot.paramMap.get('id'));

    this.deseos.getHabtacionByID(this.identificador).subscribe(habitacion => {
      console.log(habitacion);

      this.photo = habitacion.photo;
      this.titulo = habitacion.nombre;
      this.descripcion = habitacion.descripcion;
      this.precio = habitacion.precio;
      this.tipo = habitacion.tipo;
      this.huespedes = habitacion.huespedes;
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.deseos.updateHabitacion(new Habitaciones(this.titulo, this.descripcion, this.precio, this.photo, this.tipo, this.huespedes, this.identificador)).subscribe( data => {
        this.router.navigateByUrl('');
    })
  }
}
