import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';

export const routes: Routes = [
  {
    path: '',
    component:HomePage
  },
  {
    path: 'morty/:id',
    loadComponent: () => import('./morty/morty.page').then(m => m.MortyDetailsPage)
  }
];
