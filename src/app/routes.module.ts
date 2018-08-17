import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { SignupComponent } from 'src/app/signup/signup.component';
import { HomeComponent } from 'src/app/home/home.component';

const routes: Routes = [
    // basic routes
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component:LoginComponent },
    { path: 'signup', component: SignupComponent }
  ];
  export default RouterModule.forRoot(routes);