import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/entities/usuario';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string = "";
  password: string = "";
  repeatpassword: string = "";
  telefono: string = "";
  email: string = "";

  usuario: Usuario = new Usuario();

  registro = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
    repeatpassword: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
    telefono: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(private router: Router, private deseos: DeseosService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // Hacer registro

    this.usuario.username = this.username;
    this.usuario.password = this.password;
    this.usuario.telefono = this.telefono;
    this.usuario.email = this.email;
    
    console.log(this.usuario);
    
    this.deseos.registro(this.usuario).subscribe(user => {
      // Hacer el guardado del usuario
      this.router.navigateByUrl('/login'); 
    }); 
  }
}
