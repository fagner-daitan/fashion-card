import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FashionBoxComponent } from './components/fashion-box/fashion-box.component';
import { FashionBoxRoutingModule } from './fashion-box-routing.module';

@NgModule({
  declarations: [FashionBoxComponent],
  imports: [
    CommonModule,
    FashionBoxRoutingModule
  ]
})
export class FashionBoxModule { }
