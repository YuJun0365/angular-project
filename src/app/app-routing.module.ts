import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from "./home/home.component";
import { LoginComponent} from "./login/login.component";
import { RegisterComponent} from "./register/register.component";
import { AuthHomeComponent } from './auth-home/auth-home.component';
import { UserComponent } from './user/user.component';
import { FlightComponent } from './flight/flight.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'auth-home', component: AuthHomeComponent, canActivate: [AuthGuard]},
  {path: 'user', component: UserComponent, canActivate: [AuthGuard], runGuardsAndResolvers: 'always'},
  {path: 'flight', component: FlightComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
  ]
})
export class AppRoutingModule { }
