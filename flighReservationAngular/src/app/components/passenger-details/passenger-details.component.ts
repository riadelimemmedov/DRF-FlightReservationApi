import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent implements OnInit {
  public flightData:any;

  constructor(private service:ReservationService,private router:Router,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.service.getFlights(Number.parseInt(this.route.snapshot.paramMap.get('id') as string)).subscribe((response:any)=>{
      this.flightData = response
    })
  }

}
