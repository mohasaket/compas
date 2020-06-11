import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { viewClassName } from '@angular/compiler';
import { ViewHomeComponent } from './view-home/view-home.component';


const routes: Routes = [
  {path:'',component:ViewHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
