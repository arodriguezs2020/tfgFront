import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Usuario } from 'src/app/entities/usuario';
import { DeseosService } from 'src/app/services/deseos.service';
import { UsuarioDTO } from '../../entities/usuario-dto';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  rol: string = 'prueba'; 
  usuarioLogin: UsuarioDTO = new UsuarioDTO();

  constructor(private deseos: DeseosService) {
    console.log(sessionStorage.getItem("token"));
    this.deseos.userMe().subscribe(usuario => {
      this.usuarioLogin = usuario;
      console.log(usuario);
      sessionStorage.setItem("rol", usuario.roles[0])
      this.rol = usuario.roles[0];
    });
  }

  ngOnInit(): void {
  }

  logout(){
    sessionStorage.removeItem("token");
    location.reload();
  }

}
