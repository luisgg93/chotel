import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string;
  pwd: string;
  res: any[];
  err: any[];
  

  constructor(private DS: DataService, private router: Router) { }

  ngOnInit() {
  }

  volver(){
    this.router.navigate(['login']);
  }

  addUser(){
    const formData = new FormData();
    formData.append('email', this.email);
    formData.append('password', this.pwd);
    this.DS.registerUser(formData).subscribe(
      (res) => {
        alert('Se agrego Correctamente');
        this.router.navigate(['login']);
      },
      (err) => {
        alert('No se pudo registrar')
      }
    );
  }

}
