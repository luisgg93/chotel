import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  activo:boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    if(!localStorage.getItem('token'))
    this.router.navigate(['login']);
  }

  close(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  link(num){
    if (num === 1) this.router.navigate(['availability']);
    if (num === 2) this.router.navigate(['reservaction']);
    if (num === 3) this.router.navigate(['delete']);
  }

}
