import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHabitacionComponent } from './components/add-habitacion/add-habitacion.component';
import { AddHotelComponent } from './components/add-hotel/add-hotel.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HabitacionesComponent } from './components/habitaciones/habitaciones.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListReservasComponent } from './components/list-reservas/list-reservas.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { SeleccionarHabitacionComponent } from './components/seleccionar-habitacion/seleccionar-habitacion.component';
import { UpdateHabitacionComponent } from './components/update-habitacion/update-habitacion.component';
import { UpdateHotelComponent } from './components/update-hotel/update-hotel.component';

const routes: Routes = [
  {path:'', component: InicioComponent, pathMatch: 'full'},
  {path:'hotel', component: HotelComponent},
  {path:'addHotel', component: AddHotelComponent},
  {path:'updateHotel/:id', component: UpdateHotelComponent},
  {path:'contact', component: ContactoComponent},
  {path:'habitacion', component: HabitacionesComponent},
  {path:'addHabitacion', component: AddHabitacionComponent},
  {path:'updateHabitacion/:id', component: UpdateHabitacionComponent},
  {path:'reserva/:id', component: ReservaComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'select', component: SeleccionarHabitacionComponent},
  {path:'listaReservas', component: ListReservasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
