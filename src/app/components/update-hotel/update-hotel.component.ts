import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from 'src/app/entities/hotel';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-update-hotel',
  templateUrl: './update-hotel.component.html',
  styleUrls: ['./update-hotel.component.css']
})
export class UpdateHotelComponent implements OnInit {

  identificador: number = 0;

  photo: string = "";

  updateHotel = new FormGroup({
    photo: new FormControl('',Validators.required),
  });

  constructor(private route: ActivatedRoute, private router: Router, private deseos: DeseosService) {
    console.log(this.route.snapshot.paramMap.get('id'));
    this.identificador = Number(this.route.snapshot.paramMap.get('id'));

    this.deseos.getHotelById(this.identificador).subscribe(hotel => {
      this.photo = hotel.photo
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.deseos.updateHotel(new Hotel(this.photo, this.identificador)).subscribe(data => {
        this.router.navigateByUrl('');
    });
  }
}
