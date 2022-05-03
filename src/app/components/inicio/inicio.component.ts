import { getLocaleDirection } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReservaDto } from 'src/app/entities/reserva-dto';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  fechasRec: ReservaDto = new ReservaDto();

  fechas = new FormGroup({
    entrada: new FormControl(new Date(),Validators.required),
    salida: new FormControl(new Date(), Validators.required),
  });

  constructor(private router: Router, private deseos: DeseosService) {
    
  }

  ngOnInit(): void {
    console.log(sessionStorage.getItem("token"));
    this.deseos.userMe().subscribe(usuario => {
      console.log(usuario);
    });
  }

  onSubmit() {
    console.log(this.fechasRec.entrada.toString());
    console.log(this.fechasRec.salida.toString());
    
    sessionStorage.setItem("entrada", this.fechasRec.entrada.toString());
    sessionStorage.setItem("salida", this.fechasRec.salida.toString());
    this.router.navigateByUrl('/select');
  }

}
