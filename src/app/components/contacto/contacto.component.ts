import { Component, OnInit } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Contact } from 'src/app/entities/contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  nombre: string = "";
  email: string = "";
  asunto: string = "";
  message: string = "";

  contactForm = new FormGroup({
    nombre: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    asunto: new FormControl('',Validators.required),
    message: new FormControl('',Validators.required)
  });

  contacto: Contact = new Contact();

  constructor(private deseos: DeseosService, private router: Router) { }

  ngOnInit(): void {
  } 

  onSubmit() {

    this.contacto.nombre = this.nombre;
    this.contacto.email = this.email;
    this.contacto.asunto = this.asunto;
    this.contacto.message = this.message;

    this.deseos.contact(this.contacto).subscribe(data => {
      this.router.navigateByUrl('')
    })
  }

}
