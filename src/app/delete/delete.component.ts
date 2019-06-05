import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  id: string;

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

  delete(){
    this.DS.deleteReservaction(localStorage.getItem('token'), this.id).subscribe(
      (res) => {
        alert('Se Elimino la reservación');
      },
      (err) => {
        alert('No existe el codigo de reservación');
      }
    );
  }
}
