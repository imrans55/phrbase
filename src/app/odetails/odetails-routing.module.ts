import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OdetailsPage } from './odetails.page';
import { OdetailsResolver } from './odetails.resolver';

const routes: Routes = [
  {
    path: '',
    component: OdetailsPage,
    resolve: {
      data: OdetailsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OdetailsPageRoutingModule {}
