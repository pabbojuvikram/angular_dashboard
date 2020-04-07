import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },  
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent},
    {path: 'dashboard', component:DashboardComponent, canActivate: [AuthGuard]}
,
    // otherwise redirect to home
    { path: '**', redirectTo: 'dashboard' }
];

export const routing = RouterModule.forRoot(appRoutes);