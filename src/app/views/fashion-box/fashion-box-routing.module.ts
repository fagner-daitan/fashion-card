import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FashionBoxComponent } from './components/fashion-box.component';

const routes: Routes = [
  {
    path: '',
    component: FashionBoxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FashionBoxRoutingModule {}
