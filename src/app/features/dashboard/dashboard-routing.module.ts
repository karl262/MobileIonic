import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  },  {
    path: 'cards',
    loadChildren: () => import('./pages/cards/cards.module').then( m => m.CardsPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/products/products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'alemania',
    loadChildren: () => import('./pages/pageTwo/alemania/alemania.module').then( m => m.AlemaniaPageModule)
  },
  {
    path: 'food',
    loadChildren: () => import('./pages/food/food/food.module').then( m => m.FoodPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
