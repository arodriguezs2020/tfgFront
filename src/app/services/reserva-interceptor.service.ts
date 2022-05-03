import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
@Injectable({ 
  providedIn: 'root'
})
export class ReservaInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = sessionStorage.getItem("token");
    console.log(token);
    if(token != null){
      req = req.clone({
        setHeaders: {
            Authorization: "Bearer " + token
        }
    });
    }
  
    return next.handle(req); 
  } 
   
    constructor() { } 
}