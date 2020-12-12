import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisaulizePageRoutingModule } from './visaulize-routing.module';

import { VisaulizePage } from './visaulize.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisaulizePageRoutingModule
  ],
  declarations: [VisaulizePage]
})
export class VisaulizePageModule {}
