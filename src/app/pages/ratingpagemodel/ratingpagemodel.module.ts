import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RatingpagemodelPageRoutingModule } from './ratingpagemodel-routing.module';

import { RatingpagemodelPage } from './ratingpagemodel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RatingpagemodelPageRoutingModule
  ],
  declarations: [RatingpagemodelPage]
})
export class RatingpagemodelPageModule {}
