import { Component, OnInit } from '@angular/core';
import { Criteria } from 'src/app/model/criteria';
import { LoginService } from './../../services/login.service';
import { ReservationService } from './../../services/reservation.service';

@Component({
  selector: 'app-find-flights',
  templateUrl: './find-flights.component.html',
  styleUrls: ['./find-flights.component.css']
})
export class FindFlightsComponent implements OnInit {

  criteria:Criteria=new Criteria('','','')
  constructor(private loginService:LoginService,private service:ReservationService) { }

  ngOnInit(): void {
    this.loginService.login()
  }

}
