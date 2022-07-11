import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient, private router: Router) { }

  GetUser(){
    return this.http.get('https://flightlog-backend.herokuapp.com/user')
  }

  DeleteUser(id: any){
    return this.http.delete('https://flightlog-backend.herokuapp.com/user/' + id)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken() {
    console.log(localStorage.getItem('token'));
    return localStorage.getItem('token')  
  }

  GetFlight(){
    return this.http.get('https://flightlog-backend.herokuapp.com/flightLog')
  }

  PostFlight(data: any){
    return this.http.post('https://flightlog-backend.herokuapp.com/flightLog',data)
  }

  DeleteFlight(id: any){
    return this.http.delete('https://flightlog-backend.herokuapp.com/flightLog/' + id)
  }

  PutFlight(id:any , value:any){
    return this.http.put('https://flightlog-backend.herokuapp.com/flightLog/' + id, value)
  }

}
