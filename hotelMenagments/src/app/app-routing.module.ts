import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'payment',
    pathMatch: 'full'
  },
  {
    path: 'filter',
    loadChildren: () => import('./filter/filter.module').then( m => m.FilterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./order/order.module').then( m => m.OrderPageModule)
  },
  {
    path: 'order-menu',
    loadChildren: () => import('./popup/order-menu/order-menu.module').then( m => m.OrderMenuPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./popup/orders/orders.module').then( m => m.OrdersPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'chef-details',
    loadChildren: () => import('./chef-details/chef-details.module').then( m => m.ChefDetailsPageModule)
  },
  {
    path: 'searchchef',
    loadChildren: () => import('./searchchef/searchchef.module').then( m => m.SearchchefPageModule)
  },
  {
    path: 'profile-popup',
    loadChildren: () => import('./profile-popup/profile-popup.module').then( m => m.ProfilePopupPageModule)
  },  {
    path: 'profile-menu',
    loadChildren: () => import('./pages/component/profile-menu/profile-menu.module').then( m => m.ProfileMenuPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  }






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
