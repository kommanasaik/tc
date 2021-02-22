import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StarratingPage } from './starrating.page';

const routes: Routes = [
  {
    path: '',
    component: StarratingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StarratingPageRoutingModule {}
