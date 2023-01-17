import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderMenuPageRoutingModule } from './order-menu-routing.module';

import { OrderMenuPage } from './order-menu.page';
// import { HeaderComponent } from "../../header/header.component";

@NgModule({
    declarations: [OrderMenuPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        OrderMenuPageRoutingModule
    ]
})
export class OrderMenuPageModule {}
