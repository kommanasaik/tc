import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MpinpagePageRoutingModule } from './mpinpage-routing.module';

import { MpinpagePage } from './mpinpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MpinpagePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MpinpagePage]
})
export class MpinpagePageModule {}
