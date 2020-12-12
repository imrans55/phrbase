import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TnproPageRoutingModule } from './tnpro-routing.module';

import { TnproPage } from './tnpro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TnproPageRoutingModule
  ],
  declarations: [TnproPage]
})
export class TnproPageModule {}
