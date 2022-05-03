import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Hotel } from 'src/app/entities/hotel';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {

  photo: string = "";

  addHotel = new FormGroup({
    photo: new FormControl('',Validators.required),
  });

  hotel?: Hotel

  constructor(private router: Router, private deseos: DeseosService) { }

  ngOnInit(): void {
  }

  onSubmit(){

    this.hotel = new Hotel(this.photo)

    this.deseos.addHotel(this.hotel).subscribe(hotel => {
      console.log(hotel);
      this.router.navigateByUrl('hotel')
    })
  }

}
