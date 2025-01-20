import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlemaniaPageRoutingModule } from './alemania-routing.module';

import { AlemaniaPage } from './alemania.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlemaniaPageRoutingModule
  ],
  declarations: [AlemaniaPage]
})
export class AlemaniaPageModule {}
