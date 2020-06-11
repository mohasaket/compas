import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ViewHomeComponent } from './view-home/view-home.component';
import { StaticsComponent } from './statics/statics.component';
import { SharedModule } from '../shared/shared.module';
import { ItemListComponent } from './item-list/item-list.component';


@NgModule({
  declarations: [ViewHomeComponent, StaticsComponent, ItemListComponent],
  imports: [
    CommonModule,
    ViewRoutingModule,
    SharedModule
  ], exports: []
})
export class ViewModule { }
