import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StarratingPageRoutingModule } from './starrating-routing.module';

import { StarratingPage } from './starrating.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StarratingPageRoutingModule
  ],
  declarations: [StarratingPage]
})
export class StarratingPageModule {}
