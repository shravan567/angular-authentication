
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'content'},
  //{ path: 'content', component: ContentComponent },
  { path: 'login', loadChildren: 'app/authentication/authentication.module#AuthenticationModule' },
  { path: 'register', loadChildren:  'app/authentication/authentication.module#AuthenticationModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);