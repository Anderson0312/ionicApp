import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { IonicModule } from '@ionic/angular';
import { HeaderPageRoutingModule } from './header-routing.module';
@NgModule({
 declarations: [HeaderComponent],
 imports: [
 CommonModule,
 IonicModule,
 HeaderPageRoutingModule
 ]
})
export class FooterModule { }
