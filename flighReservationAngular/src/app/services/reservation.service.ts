import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginService } from './login.service'

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  flightsUrl:string = 'http://127.0.0.1:8000/flightServices/findFlights/'
  singleFlightUrl:string = 'http://127.0.0.1:8000/flightServices/flights/'
  saveReservationUrl:string = 'http://127.0.0.1:8000/flightServices/saveReservation/'

  constructor(private http:HttpClient,private loginService:LoginService) {

  }

  //!getFlights
  public getFlights(criteria:any):any{
    return this.http.post(this.flightsUrl,criteria,this.loginService.httpOptions)
  }

  //!getFlightsSingle
  public getFlightsSingle(id:number):any{
    return this.http.get(this.singleFlightUrl+id,this.loginService.httpOptions)
  }

  //!saveReservation
  public saveReservation(reservation:any):any{
    return this.http.post(this.saveReservationUrl,reservation,this.loginService.httpOptions)
  }



}
