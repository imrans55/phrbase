import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TnproPage } from './tnpro.page';

const routes: Routes = [
  {
    path: '',
    component: TnproPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TnproPageRoutingModule {}
