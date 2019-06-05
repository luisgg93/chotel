import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css']
})
export class AvailabilityComponent implements OnInit {
  room: string;
  cin: string;
  cou: string;
  activo: boolean = false;

  res: any[];
  err: any[];
  

  constructor(private DS: DataService, private router: Router) { }

  ngOnInit() {
    if(!localStorage.getItem('token'))
    this.router.navigate(['login']);

  }

  availability(){
    const data = [this.room, this.cin, this.cou];
    this.DS.searchRoom(localStorage.getItem('token'), data).subscribe(
      (res) => {
        alert('Existen '+res.availability+' Disponibles');
        this.activo = true;
      },
      (err) => {
        alert('No hay Habitaciones Disponibles');
        this.activo = false;
      }
    );
  }

  volver(){
    this.router.navigate(['home']);
  }

  reservar(){
    const formData2 = new FormData();
    formData2.append('type', this.room);
    formData2.append('checkin', this.cin);
    formData2.append('checkout', this.cou);
    this.DS.setReservar(formData2,localStorage.getItem('token')).subscribe(
      (res) => {
        alert('Se ha reservado, su codigo de referencia es: '+ res.id);
        console.log(res);
        this.router.navigate(['home']);
      },
      (err) => {
        alert('No se pudo Reservar');
        console.log(err);
      }
    );
  }
}
