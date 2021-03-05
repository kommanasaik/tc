import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MpinpagePage } from './mpinpage.page';

const routes: Routes = [
  {
    path: '',
    component: MpinpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MpinpagePageRoutingModule {}
