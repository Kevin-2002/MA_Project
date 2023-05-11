import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'dog-selector',
    loadChildren: () => import('./dog-selector/dog-selector.module').then( m => m.DogSelectorPageModule)
  },
  {
    path: 'wedding-meal',
    loadChildren: () => import('./wedding-meal/wedding-meal.module').then( m => m.WeddingMealPageModule)
  },
  {
    path: 'venue',
    loadChildren: () => import('./venue/venue.module').then( m => m.VenuePageModule)
  },
  {
    path: 'results',
    loadChildren: () => import('./results/results.module').then( m => m.ResultsPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
