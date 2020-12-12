import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OdetailsPageRoutingModule } from './odetails-routing.module';

import { OdetailsPage } from './odetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OdetailsPageRoutingModule
  ],
  declarations: [OdetailsPage]
})
export class OdetailsPageModule {}
