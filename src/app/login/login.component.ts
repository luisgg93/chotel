import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  pwd: string;
  res: any[];
  err: any[];
  

  constructor(private DS: DataService, private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('token'))
    this.router.navigate(['home']);
  }
  link(){
    this.router.navigate(['register']);
  }

  loginUser(){
    const formData = new FormData();
    formData.append('email', this.email);
    formData.append('password', this.pwd);
    this.DS.loginUser(formData).subscribe(
      (res) => {
        localStorage.setItem('token',res['token']);
        this.router.navigate(['home']);
      },
      (err) => {
        alert('Usuario o Contraseña Incorrecto');
      }
    );
  }
}
