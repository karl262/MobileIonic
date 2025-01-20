import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './features/login/login.page';
import { DashboardPage } from './features/dashboard/dashboard.page';
import { CardsPage } from './features/dashboard/pages/cards/cards.page';
import { ProductsPage } from './features/dashboard/pages/products/products/products.page';
import { AlemaniaPage } from './features/dashboard/pages/pageTwo/alemania/alemania.page';
import { FoodPage } from './features/dashboard/pages/food/food/food.page';
import { RegisterPage } from './features/register/register/register.page';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPage,
    loadChildren: () => import('./features/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'dashboard',
    component: DashboardPage,
    loadChildren: () => import('./features/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'cards',
    component: CardsPage,
    loadChildren: () => import('./features/dashboard/pages/cards/cards.module').then( m => m.CardsPageModule)
  },
  {
    path: 'products',
    component: ProductsPage,
    loadChildren: () => import('./features/dashboard/pages/products/products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'alemania',
    component: AlemaniaPage,
    loadChildren: () => import('./features/dashboard/pages/pageTwo/alemania/alemania.module').then( m => m.AlemaniaPageModule)
  },
  {
    path: 'food',
    component: FoodPage,
    loadChildren: () => import('./features/dashboard/pages/food/food/food.module').then( m => m.FoodPageModule)
  },
  {
    path: 'register',
    component: RegisterPage,
    loadChildren: () => import('./features/register/register/register.module').then( m => m.RegisterPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
