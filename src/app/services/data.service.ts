import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url: string = 'http://devtest.tee.com.co/api';
  url_register = '/auth/register';
  url_login = '/auth/login';
  url_ava = '/room/availability';
  url_re = '/room/reservation';

  constructor(private httpClient: HttpClient) {
  }

  registerUser(data){
    return this.httpClient.post<any>(this.url+this.url_register, data);
  }

  loginUser(data){
    return this.httpClient.post<any>(this.url+this.url_login, data);
  }

  searchRoom(token,data){

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })
    };

    let url_room = this.url+this.url_ava + '?type='+data[0]+'&checkin='+data[1]+'&checkout='+data[2];
    
    console.log(url_room);

    return this.httpClient.get<any>(url_room, httpOptions);
  }

  setReservar(data,token){
    const httpOptions2 = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    };
    return this.httpClient.post<any>(this.url+this.url_re, data, httpOptions2);

  }

  updateReservaction(data,token){
    const httpOptions3 = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    };
    return this.httpClient.put<any>(this.url+this.url_re, data, httpOptions3);

  }

  deleteReservaction(token,id){

    const httpOptions4 = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })
    };

    let url_room = this.url+this.url_re + '?id='+id;

    return this.httpClient.delete<any>(url_room, httpOptions4);
  }

}
