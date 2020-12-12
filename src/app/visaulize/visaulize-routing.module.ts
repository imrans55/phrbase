import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisaulizePage } from './visaulize.page';

const routes: Routes = [
  {
    path: '',
    component: VisaulizePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisaulizePageRoutingModule {}
