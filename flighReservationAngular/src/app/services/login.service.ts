import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public httpOptions:any;
  constructor(private http:HttpClient){
    this.httpOptions = {
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }

  public login(){
    let user = {
      "username":"kenan",
      "password":"kenan123321"
  }
    this.http.post('http://127.0.0.1:8000/api-token-auth/',
      JSON.stringify(user),this.httpOptions).subscribe((data)=>{
        this.httpOptions={
          headers:new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': "Token " +data['token']
          })
        }
      })
  }

}


