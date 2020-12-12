import { NgModule } from '@angular/core';
import { Routes, RouterModule, Resolve } from '@angular/router';

import { OcrPage } from './ocr.page';
import { OcrResolver } from './ocr.resolver';



const routes: Routes = [
  {
    path: '',
    component: OcrPage,
    resolve: {
      data: OcrResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OcrPageRoutingModule {}
