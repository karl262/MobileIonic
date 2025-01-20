import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlemaniaPage } from './alemania.page';

const routes: Routes = [
  {
    path: '',
    component: AlemaniaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlemaniaPageRoutingModule {}
