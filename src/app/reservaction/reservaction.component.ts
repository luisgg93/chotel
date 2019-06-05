import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservaction',
  templateUrl: './reservaction.component.html',
  styleUrls: ['./reservaction.component.css']
})
export class ReservactionComponent implements OnInit {
  id: string;
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

  volver(){
    this.router.navigate(['home']);
  }

  update(){
    const formData3 = new FormData();
    formData3.append('id', this.id);
    formData3.append('type', this.room);
    formData3.append('checkin', this.cin);
    formData3.append('checkout', this.cou);
    this.DS.updateReservaction(formData3,localStorage.getItem('token')).subscribe(
      (res) => {
        alert('Se ha modificado la reservación '+ res[0].id);
        console.log(res);
      },
      (err) => {
        alert('No existe ese codigo');
        console.log(err);
      }
    );
  }
}
