import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PdetailsPage } from './pdetails.page';
import { PdetailsResolver } from './pdetails.resolver';

const routes: Routes = [
  {
    path: '',
    component: PdetailsPage,
    resolve: {
      data: PdetailsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PdetailsPageRoutingModule {}
