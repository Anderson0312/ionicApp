import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchchefPageRoutingModule } from './searchchef-routing.module';

import { SearchchefPage } from './searchchef.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchchefPageRoutingModule
  ],
  declarations: [SearchchefPage]
})
export class SearchchefPageModule {}
