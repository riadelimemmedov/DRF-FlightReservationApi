import { Component, OnInit } from '@angular/core';
import { ReservationService } from './../../services/reservation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-flights',
  templateUrl: './display-flights.component.html',
  styleUrls: ['./display-flights.component.css']
})

export class DisplayFlightsComponent implements OnInit {

  data:any

  constructor(private service:ReservationService,private router:Router) { }

  ngOnInit(): void {
    this.data = this.service.flightData
  }

  public onSelect(id:Number):any{
    this.router.navigate(['/passengerDetails/'+id])
  }

}
