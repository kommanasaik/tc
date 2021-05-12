import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RatingpagemodelPage } from './ratingpagemodel.page';

const routes: Routes = [
  {
    path: '',
    component: RatingpagemodelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RatingpagemodelPageRoutingModule {}
