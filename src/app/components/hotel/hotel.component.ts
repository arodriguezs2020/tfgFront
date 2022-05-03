import { Component, OnInit } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Hotel } from '../../entities/hotel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  hoteles: Hotel[] = [];

  
  mostrar = false

  constructor(private deseos: DeseosService, private router: Router) {
    deseos.getHoteles().subscribe(data => {
      this.hoteles = data.content
      console.log(data.content);
      console.log(this.hoteles);
    });
  }

  deleteHotel(id: number) {
    this.deseos.deleteHotel(id).subscribe();
    location.reload()
  }

  ngOnInit(): void {
    this.deseos.userMe().subscribe(data => {
      this.mostrar = true
    })
  }

}
