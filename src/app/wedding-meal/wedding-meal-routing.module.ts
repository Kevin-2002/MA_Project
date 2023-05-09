import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeddingMealPage } from './wedding-meal.page';

const routes: Routes = [
  {
    path: '',
    component: WeddingMealPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeddingMealPageRoutingModule {}
