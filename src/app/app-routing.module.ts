import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path: 'mods',loadChildren: () => import('./mods/mods.module')
  .then(m=>m.ModsModule)},
  {
    path: 'views', loadChildren: () => import('./view/view.module')
      .then(m => m.ViewModule)
  },
  {
    path: 'collections', loadChildren: () => import('./collection/collection.module')
      .then(m => m.CollectionModule)
  },
  {
    path: 'elements', loadChildren: () => import('./element/element.module')
      .then(m => m.ElementModule)
  }
  ,
  {
    path: '', component: HomeComponent
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
