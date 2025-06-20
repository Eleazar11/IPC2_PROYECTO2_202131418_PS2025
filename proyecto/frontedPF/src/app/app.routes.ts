import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './components/registro/registro.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'registro', component: RegistroComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
