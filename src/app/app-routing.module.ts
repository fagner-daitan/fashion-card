import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './views/fashion-box/fashion-box.module#FashionBoxModule'
  },
  {
    path: 'about',
    loadChildren: './views/about-box/about-box.module#AboutBoxModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}