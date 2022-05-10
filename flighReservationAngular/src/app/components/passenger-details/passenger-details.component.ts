import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Reservation } from 'src/app/model/reservation';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent implements OnInit {
  public flightData:any;
  reservation:Reservation = new Reservation('','','','','','','','','')
  constructor(private service:ReservationService,private router:Router,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.service.getFlights(Number.parseInt(this.route.snapshot.paramMap.get('id') as any)).subscribe((response:any)=>{
      this.flightData = response
    })
  }

  public onSubmit(){
    this.reservation.flightId = this.flightData.id
    console.log(this.flightData.id)
    this.service.saveReservation(this.reservation).subscribe((response:any)=>{
      this.router.navigate(['/confirm',response.id])
    })
  }

}
