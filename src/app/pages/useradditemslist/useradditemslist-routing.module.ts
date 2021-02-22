import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UseradditemslistPage } from './useradditemslist.page';

const routes: Routes = [
  {
    path: '',
    component: UseradditemslistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UseradditemslistPageRoutingModule {}
