import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AvailabilityComponent } from './availability/availability.component';
import { ReservactionComponent } from './reservaction/reservaction.component';
import { HomeComponent } from './home/home.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
  {path:'delete', component: DeleteComponent},
  {path:'reservaction', component: ReservactionComponent},
  {path:'availability', component: AvailabilityComponent},
  {path:'home', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'*', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
