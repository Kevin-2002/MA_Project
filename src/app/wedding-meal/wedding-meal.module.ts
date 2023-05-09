import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeddingMealPageRoutingModule } from './wedding-meal-routing.module';

import { WeddingMealPage } from './wedding-meal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeddingMealPageRoutingModule
  ],
  declarations: [WeddingMealPage]
})
export class WeddingMealPageModule {}
