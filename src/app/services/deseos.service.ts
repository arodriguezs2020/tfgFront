import { Injectable } from '@angular/core';
import { Reserva } from '../entities/reserva';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {catchError} from 'rxjs/operators';
import { Usuario } from '../entities/usuario';
import { Login } from '../entities/login';
import { Authentication } from '../entities/authentication';
import { Habitaciones } from '../entities/habitaciones';
import { Hotel } from '../entities/hotel';
import { ReservaDto } from '../entities/reserva-dto';
import { UsuarioDTO } from '../entities/usuario-dto';
import { Contact } from '../entities/contact';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}; 

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  url = 'http://localhost:8080/habitaciones';
  url2 = 'http://localhost:8080/habitacion';
  url3 = 'http://localhost:8080/reservas';
  url4 = 'http://localhost:8080/reserva';
  url5 = 'http://localhost:8080/hoteles';
  url6 = 'http://localhost:8080/hotel';

  url8 = 'http://localhost:8080/usuario';
  url9 = 'http://localhost:8080/auth/login';
  url10 = 'http://localhost:8080/user/me';
  urlContact = 'http://localhost:8080/contact';

  urlPaises= 'https://restcountries.com/v3.1/all';

  constructor(public http: HttpClient) { }

  // Sirve para añadir una reserva
  contact(contacto: Contact) {
    return this.http.post<Contact>(this.urlContact, contacto, httpOptions).pipe(catchError(this.handleError('add',
     [])));
  }

  // Devuelve todos los paises
  getPaises() {
    return this.http.get<Observable<any[]>>(this.urlPaises)
    .pipe(catchError(this.handleError('get', [])));
  }

  // Devuelve todas las habitaciones
  getHabitaciones() {
    return this.http.get<Observable<Habitaciones[]>>(this.url)
    .pipe(catchError(this.handleError('get', [])));
  }

  // Devuelve todas las habitaciones disponibles
  getHabitacionesDisponibles(fechas: ReservaDto) {
    return this.http.post<Observable<Habitaciones[]>>(this.url, fechas, httpOptions).pipe(catchError(this.handleError('get',
     [])));
  }

  // Devuelve una habitacion por ID
  getHabtacionByID(id: number): Observable<Habitaciones> {
    const url = `${this.url2}/${id}`;
    return this.http.get<Habitaciones>(url).pipe(catchError(this.handleError('get',
    [])));
  }

  // Sirve para añadir una habitacion
  addHabitacion(habitacion: Habitaciones) {
    return this.http.post<Habitaciones>(this.url2, habitacion, httpOptions).pipe(catchError(this.handleError('add',
     [])));
  }

  // Sirve para actualizar una habitacion
  updateHabitacion(reserva: Habitaciones): Observable<any> {
    return this.http.put(this.url2, reserva, httpOptions).pipe(catchError(this.handleError('update',
     [])));
  }

  // Sirve para eliminar una habitacion
  deleteHabitacion(id: number): Observable<Habitaciones> {
    const url = `${this.url2}/${id}`;
    return this.http.delete<Habitaciones>(url, httpOptions).pipe(catchError(this.handleError('delete',
     [])));
  }

  // Devuelve todas las Reservas
  getReservas() {
    return this.http.get<Observable<Reserva[]>>(this.url3)
    .pipe(catchError(this.handleError('get', [])));
  }

  // Sirve para añadir una reserva
  addReserva(reserva: Reserva): Observable<Reserva> {
    return this.http.post<Reserva>(this.url4, reserva, httpOptions).pipe(catchError(this.handleError('add',
     [])));
    location.reload();
  }

  // Sirve para actualizar una reserva
  updateReserva(reserva: Reserva): Observable<any> {
    return this.http.put(this.url4, reserva, httpOptions).pipe(catchError(this.handleError('update',
     [])));
  }

  // Sirve para borrar una reserva
  deleteReserva(id: number): Observable<Reserva> {
    const url = `${this.url4}/${id}`;
    return this.http.delete<Reserva>(url, httpOptions).pipe(catchError(this.handleError('delete',
     [])));
  }

  // Devuelve todas las habitaciones
  getHoteles() {
    return this.http.get<Observable<Hotel[]>>(this.url5)
    .pipe(catchError(this.handleError('get', [])));
  }

  // Sirve para poder añadir una imagen del Hotel
  addHotel(hotel: Hotel): Observable<Hotel> {
    return this.http.post<Hotel>(this.url6, hotel, httpOptions).pipe(catchError(this.handleError('add',
     [])));
    location.reload();
  }

  // Sirve para actualizar una imagen del Hotel
  updateHotel(hotel: Hotel): Observable<any> {
    return this.http.put(this.url6, hotel, httpOptions).pipe(catchError(this.handleError('update',
     [])));
  }

  // Devuelve una imagen de un Hotel por id
  getHotelById(id: number): Observable<Hotel> {
    const url = `${this.url6}/${id}`;
    return this.http.get<Hotel>(url).pipe(catchError(this.handleError('get',
    [])));
  }

  // Borra una imagen del Hotel
  deleteHotel(id: number): Observable<Hotel> {
    const url = `${this.url6}/${id}`;
    return this.http.delete<Hotel>(url, httpOptions).pipe(catchError(this.handleError('delete',
     [])));
  }

  // Metodo para registrar un usuario
  registro(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.url8, usuario, httpOptions).pipe(catchError(this.handleError('add',
     [])));
  }

  // Metodo para login
  login(login: Login): Observable<Authentication> {
    return this.http.post<Authentication>(this.url9, login, httpOptions).pipe(catchError(this.handleError('add',
     [])));
  } 

  // Metodo para ver si estas logueado
  userMe(): Observable<UsuarioDTO> {
    return this.http.get<UsuarioDTO>(this.url10, httpOptions).pipe(catchError(this.handleError('get',
    [])));
    location.reload();
  }

  private handleError (operation = 'operation', result?:any) {
    return (error: any): any[] => {
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);
    // Let the app keep running by returning an empty result.
    return [];
    };
  }
}
