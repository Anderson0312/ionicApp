import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
      {
      path: 'order',
      loadChildren: () => import('../order/order.module').then(m =>
      m.OrderPageModule)
      },
      {
      path: 'payment',
      loadChildren: () => import('../payment/payment.module').then(m =>
      m.PaymentPageModule)
      },
      {
      path: 'filter',
      loadChildren: () => import('../filter/filter.module').then(m => m.FilterPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
        },
      {
      path: '',
      redirectTo: '/profile',
      pathMatch: 'full'
      }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderPageRoutingModule {}
