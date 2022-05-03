import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HabitacionesComponent } from './components/habitaciones/habitaciones.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { DeseosService } from './services/deseos.service';
import { ReservaInterceptorService } from './services/reserva-interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SeleccionarHabitacionComponent } from './components/seleccionar-habitacion/seleccionar-habitacion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AddHabitacionComponent } from './components/add-habitacion/add-habitacion.component';
import { UpdateHabitacionComponent } from './components/update-habitacion/update-habitacion.component';
import { AddHotelComponent } from './components/add-hotel/add-hotel.component';
import { UpdateHotelComponent } from './components/update-hotel/update-hotel.component';
import { ListReservasComponent } from './components/list-reservas/list-reservas.component';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HotelComponent,
    ContactoComponent,
    CabeceraComponent,
    LoginComponent,
    RegisterComponent,
    HabitacionesComponent,
    FooterComponent,
    ReservaComponent,
    SeleccionarHabitacionComponent,
    AddHabitacionComponent,
    UpdateHabitacionComponent,
    AddHotelComponent,
    UpdateHotelComponent,
    ListReservasComponent,
    SearchPipe
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DeseosService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ReservaInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } 
