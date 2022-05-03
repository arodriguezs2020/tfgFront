import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DeseosService } from 'src/app/services/deseos.service';
import { Login } from 'src/app/entities/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private deseos: DeseosService) { }

  logueo : Login = new Login()
 
  login = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  }); 

  ngOnInit(): void {
  } 

  onSubmit() {
    this.deseos.login(this.logueo).subscribe(token => {
      sessionStorage.removeItem("token");
      sessionStorage.setItem("token", token.token);   
      console.log(token.token);      
      this.router.navigateByUrl('');
    }); 
  }

  registro() {
    this.router.navigateByUrl('/register');
  }
}
