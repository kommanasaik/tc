import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { UseradditemslistPageRoutingModule } from './useradditemslist-routing.module';

import { UseradditemslistPage } from './useradditemslist.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ModelsModule } from 'src/app/models/models.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
     ComponentsModule,
    ModelsModule,
    UseradditemslistPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UseradditemslistPage]
})
export class UseradditemslistPageModule {}
