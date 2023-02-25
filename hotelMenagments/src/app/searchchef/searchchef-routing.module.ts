import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchchefPage } from './searchchef.page';

const routes: Routes = [
  {
    path: '',
    component: SearchchefPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchchefPageRoutingModule {}
