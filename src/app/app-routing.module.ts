
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AddshopComponent } from './pages/addshop/addshop.component';



const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: '',redirectTo: 'login',pathMatch: 'full'},


  
  {path:'addshop',component:AddshopComponent},

  
  
  

  
    
  

  {
    path: 'aboutshop',
    loadChildren: () => import('./pages/aboutshop/aboutshop.module').then( m => m.AboutshopPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./pages/orders/orders.module').then( m => m.OrdersPageModule)
  },
  {
    path: 'shop',
    loadChildren: () => import('./pages/shop/shop.module').then( m => m.ShopPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./pages/gallery/gallery.module').then( m => m.GalleryPageModule)
  },
  {
    path: 'tab-bars',
    loadChildren: () => import('./pages/tab-bars/tab-bars.module').then( m => m.TabBarsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'shops',
    loadChildren: () => import('./pages/shops/shops.module').then( m => m.ShopsPageModule)
  },
 


  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }